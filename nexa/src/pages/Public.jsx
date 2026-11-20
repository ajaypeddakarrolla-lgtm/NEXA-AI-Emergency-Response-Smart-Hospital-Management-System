import {Link} from 'react-router-dom';import {HeartPulse,Building2,Ambulance,MapPin,Activity,ShieldCheck} from 'lucide-react';
export const Landing=()=><div className="min-h-screen bg-white">
 <nav className="max-w-7xl mx-auto flex items-center justify-between p-5"><span className="flex items-center gap-2 font-extrabold text-navy"><span className="h-9 w-9 rounded-xl bg-brand grid place-items-center"><HeartPulse className="text-white" size={20}/></span>NEXA</span><Link to="/login" className="btn-ghost">Sign in</Link></nav>
 <section className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 px-5 py-12 items-center">
  <div><h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-navy leading-[1.1]">AI-Powered Emergency Care When Every Second Counts</h1>
  <p className="mt-5 text-lg text-mute max-w-lg">Intelligent emergency decision support for faster, smarter and more coordinated care.</p>
  <div className="mt-8 flex gap-3"><Link to="/login" className="btn-primary px-6 py-3">Get Started</Link><button className="btn-ghost px-6 py-3">Watch Demo</button></div></div>
  <div className="rounded-3xl bg-gradient-to-br from-navy to-blue-700 p-8 aspect-[4/3] relative overflow-hidden"><Building2 className="absolute right-8 top-8 text-white/20" size={170}/><Ambulance className="absolute left-8 bottom-10 text-white" size={110}/><div className="absolute right-6 bottom-6 bg-white rounded-2xl p-4 shadow-card"><p className="label">ETA to City Heart Institute</p><p className="text-3xl font-bold text-navy">8 min</p></div></div>
 </section>
 <section className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-4 px-5 pb-16">{[[Building2,'Smart Hospital Recommendation','Matches each patient to the hospital best equipped to treat them.'],[Ambulance,'Nearest Ambulance Selection','Dispatches the closest suitable unit automatically.'],[MapPin,'Real-Time Tracking','Follow every ambulance from dispatch to arrival.'],[ShieldCheck,'Better Patient Outcomes','Shorter response times and better-prepared teams.']].map(([I,t,d])=><div key={t} className="card p-5"><I className="text-brand mb-3"/><h3 className="font-semibold">{t}</h3><p className="text-sm text-mute mt-1">{d}</p></div>)}</section></div>;
export const Login=()=><div className="min-h-screen grid lg:grid-cols-2">
 <div className="flex items-center justify-center p-8"><form className="w-full max-w-sm space-y-4" onSubmit={e=>{e.preventDefault();location.href='/app'}}>
  <h1 className="text-3xl font-bold">Welcome Back!</h1><p className="text-sm text-mute">Sign in to coordinate emergency care.</p>
  <div><label className="label" htmlFor="u">Email / Phone</label><input id="u" className="input mt-1" required/></div>
  <div><label className="label" htmlFor="p">Password</label><input id="p" type="password" className="input mt-1" required/></div>
  <div className="flex justify-between text-sm"><label className="flex gap-2 items-center"><input type="checkbox"/>Remember me</label><a href="#" className="text-brand font-medium">Forgot password?</a></div>
  <button className="btn-primary w-full">Sign In</button><button type="button" className="btn-ghost w-full">Continue with Google</button><button type="button" className="btn-ghost w-full">Continue with Microsoft</button>
  <p className="text-sm text-center text-mute">New to NEXA? <a href="#" className="text-brand font-medium">Sign Up</a></p></form></div>
 <div className="hidden lg:flex bg-gradient-to-br from-navy to-blue-700 items-center justify-center text-white p-12"><div className="max-w-md"><Activity size={56}/><h2 className="text-3xl font-bold mt-6">Right hospital. Right ambulance. Right now.</h2><p className="mt-3 text-blue-100">NEXA explains every recommendation so your team can act with confidence.</p></div></div></div>;
