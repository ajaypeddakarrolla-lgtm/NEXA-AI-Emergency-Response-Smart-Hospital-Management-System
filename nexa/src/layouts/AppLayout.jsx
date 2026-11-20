import {useState} from 'react';import {NavLink,Outlet,Link} from 'react-router-dom';import {motion} from 'framer-motion';
import {LayoutDashboard,Siren,Ambulance,Building2,Stethoscope,Users,BarChart3,FileText,Settings,LogOut,HeartPulse,Bell,Menu,X,Search,Sparkles,Map} from 'lucide-react';import {useStore} from '../store/useStore';
const NAV=[['/app','Dashboard',LayoutDashboard],['/app/emergency','Emergency',Siren],['/app/tracking','Live Tracking',Map],['/app/ambulances','Ambulances',Ambulance],['/app/hospitals','Hospitals',Building2],['/app/doctors','Doctors',Stethoscope],['/app/hospital','Hospital View',Users],['/app/ai','AI Recommendation',Sparkles],['/app/analytics','Analytics',BarChart3],['/app/reports','Reports',FileText],['/app/settings','Settings',Settings]];
export const Logo=()=><div className="flex items-center gap-3"><div className="h-10 w-10 rounded-xl bg-brand grid place-items-center"><HeartPulse className="text-white" size={22}/></div><div><p className="text-white font-extrabold tracking-wide leading-none">NEXA</p><p className="text-[10px] text-slate-400 mt-1 leading-tight">AI Emergency Decision<br/>Support System</p></div></div>;
export default function AppLayout(){const [open,setOpen]=useState(false);const n=useStore(s=>s.notifications.length);const user=useStore(s=>s.user);
 return <div className="min-h-screen lg:flex">
 {open&&<div className="fixed inset-0 bg-black/40 z-30 lg:hidden" onClick={()=>setOpen(false)}/>}
 <aside className={`fixed lg:sticky top-0 z-40 h-screen w-60 shrink-0 bg-side flex flex-col p-4 transition-transform ${open?'':'-translate-x-full'} lg:translate-x-0`}>
  <div className="flex justify-between items-start mb-8 px-1"><Logo/><button className="lg:hidden text-white" aria-label="Close menu" onClick={()=>setOpen(false)}><X/></button></div>
  <nav className="flex-1 space-y-1 overflow-y-auto" aria-label="Main">{NAV.map(([to,l,I])=><NavLink key={to} to={to} end={to==='/app'} onClick={()=>setOpen(false)} className={({isActive})=>`flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium ${isActive?'bg-brand text-white':'text-slate-300 hover:bg-white/5'}`}><I size={18}/>{l}</NavLink>)}</nav>
  <Link to="/login" className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-slate-300 hover:bg-white/5"><LogOut size={18}/>Logout</Link>
 </aside>
 <div className="flex-1 min-w-0">
  <header className="sticky top-0 z-20 bg-white/90 backdrop-blur border-b border-line px-4 lg:px-8 h-16 flex items-center gap-3">
   <button className="lg:hidden" aria-label="Open menu" onClick={()=>setOpen(true)}><Menu/></button>
   <div className="relative flex-1 max-w-md"><Search size={16} className="absolute left-3 top-3 text-mute"/><input aria-label="Search" className="input pl-9" placeholder="Search patients, hospitals, ambulances"/></div>
   <div className="ml-auto flex items-center gap-4"><Link to="/app/notifications" aria-label={`${n} notifications`} className="relative"><Bell size={20}/><span className="absolute -top-1.5 -right-2 bg-danger text-white text-[10px] rounded-full h-4 min-w-4 px-1 grid place-items-center">{n}</span></Link>
   <div className="flex items-center gap-2"><div className="h-9 w-9 rounded-full bg-navy text-white grid place-items-center text-sm font-semibold">{user.name[0]}</div><div className="hidden sm:block leading-tight"><p className="text-sm font-semibold">{user.name}</p><p className="text-xs text-mute capitalize">{user.role}</p></div></div></div>
  </header>
  <motion.main initial={{opacity:0}} animate={{opacity:1}} className="p-4 lg:p-8 space-y-6 max-w-[1500px]"><Outlet/></motion.main>
 </div></div>}
