// BitGods B028 unified runtime adapter
window.BITGODS_B028 = {
 version:"0.28.0-prealpha",
 systems:{
  ecology:true, agents:true, needs:true, memory:true, settlement:true,
  economy:true, civilization:true, conflict:true, crafting:true,
  genetics:true, science:true, godmode:true, history:true, persistence:true
 },
 overlays:["terrain","moisture","food","population","trade","political","conflict","genetics","history"],
 mode:"avatar",
 timeline:{year:1,speed:1,paused:false,branch:"prime"},
 history:[],
 settlements:[
  {id:"river",x:5,y:5,population:38,food:40,role:"food"},
  {id:"forest",x:20,y:5,population:34,wood:55,role:"wood"},
  {id:"ridge",x:23,y:14,population:32,ore:50,role:"ore"}
 ],
 inspect(target){
  return {target,state:"authoritative-adapter",causes:[],consequences:[],history:this.history.slice(-8)};
 },
 event(type,payload,cause=null){
  this.history.push({id:this.history.length+1,type,payload,cause,year:this.timeline.year});
 },
 fork(name){
  const snap=JSON.parse(JSON.stringify({timeline:this.timeline,settlements:this.settlements,history:this.history}));
  this.event("TimelineForked",{name});
  return {name,snapshot:snap};
 },
 setMode(mode){ if(["avatar","architect","god"].includes(mode)){this.mode=mode;this.event("ModeChanged",{mode});} },
 scanDNA(specimen){
  const result={specimen,traits:{cold_tolerance:.72,water_efficiency:.61,growth:.55}};
  this.event("GenomeRead",result); return result;
 },
 editDNA(specimen){
  const result={specimen,before:{cold_tolerance:.72,growth:.55},after:{cold_tolerance:.88,growth:.49},tradeoff:true};
  this.event("GenomeEditProposed",result,"GenomeRead"); return result;
 },
 save(){
  localStorage.setItem("bitgods-b028",JSON.stringify(this));
  this.event("UnifiedWorldSaved",{});
 },
 tick(){
  if(this.timeline.paused)return;
  this.timeline.year += .01*this.timeline.speed;
  if(Math.floor(this.timeline.year)%5===0 && Math.random()<.03)
    this.event("WorldPulse",{settlements:this.settlements.length});
 }
};
window.BITGODS_B028.event("UnifiedRuntimeStarted",{systems:Object.keys(window.BITGODS_B028.systems).length});
setInterval(()=>window.BITGODS_B028.tick(),250);
