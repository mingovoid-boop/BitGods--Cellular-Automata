// B031 Live Emergence + Scale presentation adapter
window.BITGODS_B031={
 telemetry:{population:100,fullLOD:100,reducedLOD:0,aggregateLOD:0,tickMs:0},
 roads:[],lineages:{},construction:[],
 traffic:{},
 recordTraffic(x,y){
   const k=x+","+y;this.traffic[k]=(this.traffic[k]||0)+1;
   if(this.traffic[k]===20)this.roads.push({x,y,level:1});
 },
 beginConstruction(x,y,type){
   this.construction.push({x,y,type,progress:0});
 },
 step(){
   this.construction.forEach(c=>c.progress=Math.min(1,c.progress+.02));
   this.telemetry.population=Math.max(this.telemetry.population,100);
 },
 draw(ctx,TILE){
   this.roads.forEach(r=>{ctx.fillStyle="#8a755d";ctx.fillRect(r.x*TILE,r.y*TILE+13,TILE,6)});
   this.construction.forEach(c=>{
     ctx.strokeStyle="#ffd54a";ctx.strokeRect(c.x*TILE+4,c.y*TILE+4,24,24);
     ctx.fillStyle="#ffd54a";ctx.fillRect(c.x*TILE+4,c.y*TILE+27,24*c.progress,3);
   });
   ctx.fillStyle="rgba(0,0,0,.7)";ctx.fillRect(6,6,210,54);
   ctx.fillStyle="#fff";ctx.font="12px monospace";
   ctx.fillText("B031 LIVE TELEMETRY",14,22);
   ctx.fillText("POP "+this.telemetry.population+" | LOD "+this.telemetry.fullLOD+"/"+this.telemetry.reducedLOD+"/"+this.telemetry.aggregateLOD,14,40);
 }
};setInterval(()=>BITGODS_B031.step(),200);
