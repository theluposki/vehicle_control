const s={events:{},on(e,t){s.events[e]=s.events[e]||[],s.events[e].push(t)},emit(e,...t){e in s.events&&s.events[e].forEach(n=>{n(...t)})}};export{s as E};
