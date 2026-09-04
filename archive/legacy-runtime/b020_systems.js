// B020 additive playable systems module
window.BITGODS_B020={
 agents:[
  {id:"a1",name:"Mara Bitboot",hunger:.35,memory:[],role:"wanderer"},
  {id:"a2",name:"Crumbulus",hunger:.62,memory:[],role:"wanderer"}
 ],
 creatures:[{id:"c1",kind:"grazer",hp:20},{id:"c2",kind:"stalker",hp:20}],
 loot:[],
 day:1,
 step(){
   this.agents.forEach(a=>{
     a.hunger=Math.min(1,a.hunger+.01);
     if(a.hunger>.7){a.memory.push({type:"food_search",day:this.day});}
   });
 },
 combat(target){
   target.hp-=10;
   const e={type:"CombatHit",target:target.id,damage:10};
   if(target.hp<=0){this.loot.push({item:"biological_sample",cause:"CreatureDefeated"});return [e,{type:"LootSpawned",item:"biological_sample"}]}
   return [e];
 }
};
setInterval(()=>window.BITGODS_B020.step(),500);
