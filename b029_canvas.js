// B029 Canvas Simulation Integration
window.BITGODS_B029={
 tick:0, overlay:"none",
 settlements:[
  {id:"river",x:5,y:5,kind:"food",stock:24,border:5},
  {id:"forest",x:20,y:5,kind:"wood",stock:22,border:5},
  {id:"ridge",x:23,y:14,kind:"ore",stock:20,border:4}
 ],
 workers:[], caravans:[], refugees:[], structures:[],
 init(){
  for(let i=0;i<18;i++)this.workers.push({id:"w"+i,x:4+(i%6),y:4+(i%3),home:"river",role:i%3===0?"builder":"farmer",carry:0});
  for(let i=0;i<12;i++)this.workers.push({id:"f"+i,x:18+(i%4),y:4+(i%3),home:"forest",role:"logger",carry:0});
  for(let i=0;i<10;i++)this.workers.push({id:"r"+i,x:22+(i%3),y:13+(i%2),home:"ridge",role:"miner",carry:0});
  this.caravans.push({x:5,y:5,tx:20,ty:5,cargo:"food",amount:4});
  this.structures.push({x:6,y:6,type:"farm"},{x:19,y:6,type:"workshop"},{x:24,y:14,type:"mine"});
 },
 step(){
  this.tick++;
  this.workers.forEach((w,i)=>{
   if(this.tick%8===i%8){
    const s=this.settlements.find(x=>x.id===w.home);
    let dx=Math.sign(s.x-w.x),dy=Math.sign(s.y-w.y);
    if(w.carry===0){w.x+=((i%3)-1); w.carry=1;}
    else {w.x+=dx;w.y+=dy;if(w.x===s.x&&w.y===s.y){s.stock++;w.carry=0}}
   }
  });
  this.caravans.forEach(c=>{if(this.tick%3===0){c.x+=Math.sign(c.tx-c.x);c.y+=Math.sign(c.ty-c.y)}});
 },
 draw(ctx,TILE){
  this.structures.forEach(s=>{ctx.fillStyle=s.type==="farm"?"#e6d36a":s.type==="mine"?"#777":"#c58b57";ctx.fillRect(s.x*TILE+4,s.y*TILE+4,24,24)});
  this.settlements.forEach(s=>{ctx.strokeStyle="#fff";ctx.lineWidth=2;ctx.strokeRect((s.x-s.border)*TILE,(s.y-s.border)*TILE,s.border*2*TILE,s.border*2*TILE)});
  this.workers.forEach(w=>{ctx.fillStyle=w.role==="farmer"?"#f0df76":w.role==="logger"?"#6fd080":w.role==="miner"?"#b9b9c8":"#75d7ff";ctx.fillRect(w.x*TILE+11,w.y*TILE+9,10,14)});
  this.caravans.forEach(c=>{ctx.fillStyle="#ff9b4a";ctx.fillRect(c.x*TILE+7,c.y*TILE+12,18,10)});
  this.refugees.forEach(r=>{ctx.fillStyle="#ddd";ctx.fillRect(r.x*TILE+12,r.y*TILE+10,8,12)});
  if(this.overlay==="trade"){ctx.fillStyle="rgba(255,215,74,.18)";ctx.fillRect(0,0,30*TILE,18*TILE)}
  if(this.overlay==="political"){ctx.fillStyle="rgba(117,215,255,.12)";ctx.fillRect(0,0,30*TILE,18*TILE)}
 },
 setOverlay(x){this.overlay=x},
 triggerConflict(){
  this.refugees.push({x:23,y:14},{x:22,y:14},{x:24,y:13});
  this.settlements.find(s=>s.id==="ridge").stock=Math.max(0,this.settlements.find(s=>s.id==="ridge").stock-5);
 }
};BITGODS_B029.init();setInterval(()=>BITGODS_B029.step(),180);
