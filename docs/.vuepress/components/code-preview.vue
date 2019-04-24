<template>
  <div class="code-preview-root">
    <header >
      <div>
      <button class="next" @click="handleNavigate" data-nav="1"><span>Next</span></button>
      <button class="prev" @click="handleNavigate" data-nav="-1"><span>Prev</span></button>
      <br/>
      <div class="center-me" ref="counter"> 
      </div>
      </div>
      <div class="space"></div>
    </header>
     <section ref="section">
<div class="parts" ref="parts">
  <div class="inner">
     </div>
  </div>

     </section>
   
    <div ref="content" class="__content">
    <div class="__inner">
      
      <slot></slot>
    </div>
      
    </div>
    
  </div>
</template>

<script>
import markkDownIt from "markdown-it";
  const md1=markkDownIt(); 
const delay=ms=>new Promise(resolve=>setTimeout(resolve,ms));
async function showHighlight(el,lines){
  Array.from(el.querySelectorAll('.line-numbers-wrapper .line-number')).forEach((hl,idx)=>hl.className=`line-number ${lines.includes(idx+1) ? 'in-range' : ''}`);
  Array.from(el.querySelectorAll('.highlighted')).forEach(hl=>hl.classList.add('animated','faster','fadeOut'));
  await delay(700);
  const hlLines=el.querySelector('.highlight-lines');
  if(!hlLines) throw ` .highlight-lines not found`;
   el.style.background=getComputedStyle(hlLines.parentElement ).background ;
  const length=hlLines.childElementCount;
hlLines.innerHTML=
Array.from({length}).map((_,idx)=>
  lines.includes(idx+1) ? 
  `<div class="highlighted animated fadeIn
   ${!lines.includes(idx) ? ' first' : ''}
   ${!lines.includes(idx+2) ? ' last' : ''} ">&nbsp;</div>`  : '<br/>').join('\n');
 
}
function smoothEffect(el,scrollY){
 
  const delay=1000;
  const length=10;
  const step=(scrollY - el.scrollTop)/ length;
  const steps=Array.from({length}).map((_,idx)=>(idx+1)*step+el.scrollTop).map(v=>v>=0 ? v :0);

  function roll(){
    if(!steps.length) return;
    const y=steps.shift();
    el.scrollTop=y;
    setTimeout(roll,delay/length);
  }
  roll(); 
}
function execRegExp(regExp,s){
  const result=regExp.exec(s);
  return result && Array.from(result);
}
function contains(pattern,s){
  const p= `^${pattern.split('*').join('.*')}$`;
  const result=!!(new RegExp(p,'gm').test(s));;
  return result;
}
const rangeFuncs={
  repeatUntil(args,lines){
    const [searchTerm]=args;
    const result=[]
    for(let idx=0;idx<lines.length;idx++){
      const line=lines[idx];
      if(!line.trim()){
        if(result.length) result.push(idx+1);
        continue;
      }
      if(contains(searchTerm,line.trim()))   result.push(idx+1)
      else if( result.length) return result;
    }
    return result;
  },
  fragment(args,lines){
    const [searchTerm]=args;
    const result=[];
    let founded=false;
    for(let idx=0;idx<lines.length;idx++){
      const line=lines[idx];
      if(!line.trim()){
        if(result.length) result.push(idx+1);
        continue;
      }
      founded=founded || contains(searchTerm,line);
      if(founded)   result.push(idx+1);
      if(founded && line.includes('</>')) return result;

       
    }
    return result;
  },
   line(args,lines){
     const [searchTerm]=args;
   
      for(let idx=0;idx<lines.length;idx++){
         const line=lines[idx];
        if(   contains(searchTerm,lines[idx])) return [idx+1];
      }
      return [];
   },
  block(args,lines){
   const [searchTerm]=args;
    const result=[];
    let founded=false;
    let lockCount=0,plockCount=0;
    for(let idx=0;idx<lines.length;idx++){
      const line=lines[idx];
      if(!line.trim()){
        if(result.length) result.push(idx+1);
        continue;
      }
     
      
      founded=founded || contains(searchTerm,line);
      if(founded){ 
          result.push(idx+1);
           for(const ch of Array.from(line)){
             if(ch=='(') plockCount++;
             else if (ch==')')plockCount--;
            else if(ch=='}') {
              lockCount--;
              if(  lockCount<=0 && plockCount<=0) return result;
            }
            else if(ch=='{') lockCount++;
          }
          
        
           
      }
       

       
    }
    return result;
  }, inlineBlock(args,lines){
   const [searchTerm]=args;
    const result=[];
    let founded=false;
    let lockCount=0;
    for(let idx=0;idx<lines.length;idx++){
      const line=lines[idx];
      if(!line.trim()){
        if(result.length) result.push(idx+1);
        continue;
      }
      founded=founded || contains(searchTerm,line);
      if(founded){ 
          result.push(idx+1);
         for(const ch of Array.from(line)){
            if(ch==')') {
              lockCount--;
             if(  lockCount<=0) return result;
            }
            else if(ch=='(') lockCount++;
          }     
      } 
    }
    return result;
  },
  arrayBlock(args,lines){
   const [searchTerm]=args;
    const result=[];
    let founded=false;
    let lockCount=0;
    for(let idx=0;idx<lines.length;idx++){
      const line=lines[idx];
      if(!line.trim()){
        if(result.length) result.push(idx+1);
        continue;
      }
      founded=founded || contains(searchTerm,line);
      if(founded){ 
          result.push(idx+1);
         for(const ch of Array.from(line)){
            if(ch==']') {
              lockCount--;
             if(  lockCount<=0) return result;
            }
            else if(ch=='[') lockCount++;
          }     
      } 
    }
    return result;
  }
  
}
function getRanges(array) {
  var ranges = [], rstart, rend;
  for (var i = 0; i < array.length; i++) {
    rstart = array[i];
    rend = rstart;
    while (array[i + 1] - array[i] == 1) {
      rend = array[i + 1]; // increment the index if the numbers sequential
      i++;
    }
    ranges.push(rstart == rend ? rstart+'' : rstart + '-' + rend);
  }
  return ranges.join(',');
}

function computeLineRange(range,lines){
     
  const ranges=range.split('|');
  const result= [].concat(...ranges.map(    r=> {
      let groups; 
      groups = execRegExp(/^([0-9])+$/i,r);
      if(groups) return [+r]; 
      groups = execRegExp(/^([a-z0-9_-]+)\((.*)\)$/i,r);
      if(groups) {
         const func=rangeFuncs[groups[1]];
        if(!func) throw `${groups[1]} not found in rangeFuncs `;
        return  func(groups[2].split(','), lines) ;
      }  
      groups =  r.includes(',') && r.split(',');
      if(groups) r.map(n=>+n);
      groups =  r.includes('..') && r.split('..');
      if(groups) return  Array.from({length:+groups[1]-groups[0]+1}).map((_,idx)=>idx+groups[0]);
      return  [];
 
  }));
  let lastEmptyCount=0;
 
  for(let idx=result.length-1;idx>=0;idx--){
     const lineIndex=result[idx]-1;
     if(  lines[lineIndex].trim()) break;
      lastEmptyCount++;
  }
   
  return result.slice(0,result.length- lastEmptyCount );
}
export default {
  name: "code-preview",
  data: {
    currentPart: 0
  },
  mounted() {
    this.lines=this.lines || this.$el.querySelector('.__content code').innerText.split('\n');
      
    const parts = Array.from(this.$refs.content.querySelectorAll(".part"));
    let counter=0;
    const clonedParts =[];
     for(const part of parts){ 
       const clonedPart=part.cloneNode(true);
       clonedParts.push(clonedPart);
       clonedPart.setAttribute('data-index',counter++);
       clonedPart.innerHTML=md1.render(part.innerHTML);
       const lines=computeLineRange(part.getAttribute('data-range'),this.lines) ;
      try{ 
        const span=document.createElement('sub');
         span.className='line-ranges';
        clonedPart.appendChild(span);
        span.innerText= getRanges(lines);
    
      }catch(exc){
        
        }
clonedPart.addEventListener('click',e=>{
  this.handleNavigate(+e.currentTarget.getAttribute('data-index'));
});

        this.$refs.parts.querySelector('.inner').appendChild(clonedPart ); 
     }
      const maxHeight=Math.max(60,...clonedParts.map(p=>p.clientHeight));
 this.$refs.parts.style.minHeight=(maxHeight*1.5)+'px';   

    this.handleNavigate(0);
    
  },
  methods: {
    handleNavigate(e) {
    const {content,parts}=this.$refs;
      if( e  && e.currentTarget){ 
        const { currentTarget } = e;
      const nav = +currentTarget.getAttribute("data-nav");
      
      this.currentPart+=nav;
      }
      else if (typeof e=='number') this.currentPart=+e; 
       this.passed=  this.passed ||{0:true};
      this.passed[this.currentPart]=true;

      this.currentPart = this.currentPart || 0;
      const partElements = Array.from(parts.querySelectorAll(".part"));
      let counter=0;
      for(const partEl of partElements){
        partEl.className=['part',
        this.currentPart==counter&& 'active',
        this.passed[counter] && 'passed'
        ].filter(notFalse=>notFalse).join(' ');
 counter++;
      }
      const targetPart = partElements[ this.currentPart];
      //this.$refs.parts.style.minHeight=Math.max(targetPart.clientHeight*1.5,100)+'px';   
      const lines=computeLineRange(targetPart.getAttribute('data-range'),this.lines) ;
      // [this.currentPart,this.currentPart+1,this.currentPart+2];
        if(!this.clientHeightForHighlighted){
        const highlighted=content.querySelector('.highlighted');
       if(!highlighted) throw `.highlighted not found`;
        this.clientHeightForHighlighted=highlighted.clientHeight;
      }
       const minLine= Math.min(...lines);
        showHighlight(content,lines);
        smoothEffect(  content,this.clientHeightForHighlighted*minLine);
          this.$refs.counter.innerText=`${this.currentPart+1}/${partElements.length}`;
         
    }
  }
};
</script>
<style lang='stylus'>
.code-preview-root{  
  
.line-number.in-range{
    color:yellow;
     }
    .highlighted.first{
  border-top:1px solid #fff;
  }
  .highlighted.last{
  border-bottom:1px solid #fff;
  }
  .part{
  position:relative;
  }
.part sub:before{

 
        content: 'format_list_numbered_rtl';
    font-family: "Material Icons";
    max-width: 1rem;
    font-size: 14px;
      display: inline-block;
   direction: ltr;
    }
 .part sub{
    font-style: italic;
    direction: ltr;
    display:inline-block;
    margin:0 0.3rem;
    position: absolute;
    bottom:0;
    left:0;
}
.part>*{
  display: inline-block;
  margin:0;
  width:100%;

}
.part.active{
     background:#aaa;
  }
 .part.active sub{
   display: none;
    }
    
}

</style>
<style scoped lang='stylus'>
.code-preview-root {
  display: flex;
  flex-direction: column;
  flex:1;
  min-height:500px;
    
}
.line-ranges{
    background:orange;
    border-radius:5px;
}

.__content {
  display:flex;
   flex:1;
   max-height:300px;
    overflow-y:scroll;
overflow-x:hidden;
    direction:ltr;
   .__inner{

   flex:1;

  
   }  
   div[class*="language-"]{
   border-radius:0;
   min-height:100%;
  }
   
}

.part, part {
  display: none;
}

 section{
     border-bottom: 1px solid #555555;
    box-shadow: inset 0px -3px 2px rgba(0,0,0,0.3);
  background:whitesmoke;
    transition:all 0.7s;
   .parts{
  padding:0.5rem;
  max-height:6rem;
     overflow-y:scroll;
     overflow-x:hidden;
         transition:all 0.7s;
     }
   
  .part,part{
    cursor:pointer;
    display:block ; 
    opacity:0.4;
    position:relative
    padding-right:1.5rem;
    overflow:visible;
  }
  .part:hover {
    color:#23a;
 
  }
  
  .part:before{
    font-family: "Material Icons";
    content:'check_box_outline_blank'
    position:absolute;
    right:0.3rem;
    top:0.3rem;
    opacity:1;
    
    }
    .part:after{
      position:absolute;
      content:' ';
    right:-0.5rem;
    left:-0.5rem;
    bottom:0px;
    border-bottom:1px solid #777;
  
      }
.part.passed:before{
    content:'check_box'
  }
   
  .part.active{
    opacity:1;
    margin:0 -0.5rem;
    padding:0 0.5rem;
        padding-right:2rem;

    sub{
      display:none;
     }
    }
  .part.active:before{
    content:'check';
     right:0.7rem;
    color:#3a2;
  }
  .part{
    }
  .inner{
    
  }
}
header{
      padding: 0 1rem;
    display: flex;
    z-index: 1000;
    max-height: 0;
    overflow: visible;
    display:none; 
  .space{
    flex:1
    order:-1;
  }
   button{
     font-size:20pt;
     margin:0 0.1rem;
     border:2px solid #aaa;
     background:#ddd;
     border-radius:100%;
       font-family: "Material Icons";
       outline:none !important;
       min-height:2.5rem;
       margin-top:1rem;
       cursor:pointer;
       opacity:0.1;
   }
  button.next:after{
    content: 'navigate_next';
    font-family: "Material Icons";
  }
  button span{
    display:none;
  }
  button:hover{
     opacity:1;
  }
  button.prev:before{
    content: 'navigate_before';

    font-family: "Material Icons";
  }
}
 
</style>