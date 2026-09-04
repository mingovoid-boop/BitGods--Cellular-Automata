const C=document.querySelector('#game'),X=C.getContext('2d'); X.imageSmoothingEnabled=false;
const TILE=32,W=30,H=18,seed='BG-B019-001';
let paused=false,tick=0,player={x:15,y:9,inv:{wood:0,stone:0,fragment:0}},machine=null,quest={active:false,resolved:false};
const cells=[];
function rnd(x,y){let n=(x*374761393+y*668265263+19001)>>>0;n=(n^(n>>13))*1274126177>>>0;return (n>>>0)/4294967295}
for(let y=0;y<H;y++){cells[y]=[];for(let x=0;x<W;x++){let r=rnd(x,y);cells[y][x]={kind:r<.12?'water':r<.24?'forest':r<.32?'stone':'grass',wood:r<.24?3:0,stone:r>=.24&&r<.32?2:0}}}
const events=[];function ev(type,msg){events.unshift({tick,type,msg});events.splice(10);renderUI()}
function color(k){return {water:'#4da6ff',forest:'#4f9b45',stone:'#888',grass:'#76b852'}[k]}
function draw(){X.clearRect(0,0,C.width,C.height);for(let y=0;y<H;y++)for(let x=0;x<W;x++){let c=cells[y][x];X.fillStyle=color(c.kind);X.fillRect(x*TILE,y*TILE,TILE,TILE);X.strokeStyle='#202020';X.strokeRect(x*TILE,y*TILE,TILE,TILE)}
if(machine){X.fillStyle='#ffd54a';X.fillRect(machine.x*TILE+8,machine.y*TILE+8,16,16)}
X.fillStyle='#ff77aa';X.fillRect(player.x*TILE+8,player.y*TILE+5,16,22);X.fillStyle='#111';X.fillRect(player.x*TILE+11,player.y*TILE+10,3,3);X.fillRect(player.x*TILE+19,player.y*TILE+10,3,3);
if(window.BITGODS_B029) BITGODS_B029.draw(X,TILE);
if(window.BITGODS_B031) BITGODS_B031.draw(X,TILE);
requestAnimationFrame(draw)}
function renderUI(){let c=cells[player.y][player.x];document.querySelector('#inspect').textContent=`CELL ${player.x},${player.y}\n${c.kind.toUpperCase()}\nwood ${c.wood}\nstone ${c.stone}\ntick ${tick}`;
document.querySelector('#inventory').textContent=`wood ${player.inv.wood} | stone ${player.inv.stone} | relic ${player.inv.fragment}`;
document.querySelector('#events').innerHTML=events.map(e=>`<div>${e.tick}: ${e.type} — ${e.msg}</div>`).join('')}
function move(dx,dy){let nx=Math.max(0,Math.min(W-1,player.x+dx)),ny=Math.max(0,Math.min(H-1,player.y+dy));if(cells[ny][nx].kind!=='water'){player.x=nx;player.y=ny;tick++;if(!quest.active&&player.x>20){quest.active=true;ev('QuestCreated','Mara needs a water marker repaired')}renderUI()}}
addEventListener('keydown',e=>{let m={ArrowUp:[0,-1],w:[0,-1],ArrowDown:[0,1],s:[0,1],ArrowLeft:[-1,0],a:[-1,0],ArrowRight:[1,0],d:[1,0]}[e.key];if(m)move(...m)});
document.querySelector('#pause').onclick=()=>{paused=!paused;ev('Simulation',paused?'paused':'running')};
document.querySelector('#step').onclick=()=>{tick++;ev('SimulationStep','advanced one tick')};
document.querySelector('#gather').onclick=()=>{let c=cells[player.y][player.x];if(c.wood){c.wood--;player.inv.wood++;ev('ResourceGathered','wood')}else if(c.stone){c.stone--;player.inv.stone++;ev('ResourceGathered','stone')}};
document.querySelector('#craft').onclick=()=>{if(player.inv.wood>=1&&player.inv.stone>=1&&!machine){player.inv.wood--;player.inv.stone--;machine={x:player.x,y:player.y};ev('MachineBuilt','◇→⬡→▲ cellular marker');if(quest.active&&!quest.resolved){quest.resolved=true;player.inv.fragment++;ev('QuestResolved','water marker restored');ev('LootAcquired','ancient blueprint fragment')}}else ev('CraftFailed','need 1 wood + 1 stone')};
document.querySelector('#save').onclick=()=>{localStorage.setItem('bitgods-b019',JSON.stringify({tick,player,machine,quest,cells,events}));ev('WorldSaved','browser save written')};
document.querySelector('#load').onclick=()=>{let s=localStorage.getItem('bitgods-b019');if(!s)return ev('LoadFailed','no save');let o=JSON.parse(s);tick=o.tick;player=o.player;machine=o.machine;quest=o.quest;for(let y=0;y<H;y++)for(let x=0;x<W;x++)cells[y][x]=o.cells[y][x];events.length=0;events.push(...o.events);ev('WorldLoaded','save restored')};
ev('WorldCreated',seed);draw();renderUI();