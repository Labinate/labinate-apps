import{L as S,f as P,M as N,I as E,N as B,K as j,r as M,O as F,P as U,Q as z,R as H,u as R,S as V,T as G,U as Q,z as J,x as X}from"#entry";const Y=()=>S().$supabase.client,Z={trailing:!0};function x(e,a=25,n={}){if(n={...Z,...n},!Number.isFinite(a))throw new TypeError("Expected `wait` to be a finite number");let r,t,c=[],s,o;const l=(d,D)=>(s=I(e,d,D),s.finally(()=>{if(s=null,n.trailing&&o&&!t){const m=l(d,o);return o=null,m}}),s),u=function(...d){return n.trailing&&(o=d),s||new Promise(D=>{const m=!t&&n.leading;clearTimeout(t),t=setTimeout(()=>{t=null;const f=n.leading?r:l(this,d);o=null;for(const b of c)b(f);c=[]},a),m?(r=l(this,d),D(r)):c.push(D)})},i=d=>{d&&(clearTimeout(d),t=null)};return u.isPending=()=>!!t,u.cancel=()=>{i(t),c=[],o=null},u.flush=()=>{if(i(t),!o||s)return;const d=o;return o=null,l(this,d)},u}async function I(e,a,n){return await e.apply(a,n)}const K=Symbol.for("nuxt:client-only");function y(...e){const a=typeof e[e.length-1]=="string"?e.pop():void 0;A(e[0],e[1])&&e.unshift(a);let[n,r,t={}]=e;const c=P(()=>j(n));if(typeof c.value!="string")throw new TypeError("[nuxt] [useAsyncData] key must be a string.");if(typeof r!="function")throw new TypeError("[nuxt] [useAsyncData] handler must be a function.");const s=S();t.server??=!0,t.default??=ae,t.getCachedData??=O,t.lazy??=!1,t.immediate??=!0,t.deep??=N.deep,t.dedupe??="cancel",t._functionName,s._asyncData[c.value];const o={cause:"initial",dedupe:t.dedupe};s._asyncData[c.value]?._init||(o.cachedData=t.getCachedData(c.value,s,{cause:"initial"}),s._asyncData[c.value]=$(s,c.value,r,t,o.cachedData));const l=s._asyncData[c.value];l._deps++;const u=()=>s._asyncData[c.value].execute(o),i=t.server!==!1&&s.payload.serverRendered;{let m=function(_){const g=s._asyncData[_];g?._deps&&(g._deps--,g._deps===0&&g?._off())};const f=G();if(f&&i&&t.immediate&&!f.sp&&(f.sp=[]),f&&!f._nuxtOnBeforeMountCbs){f._nuxtOnBeforeMountCbs=[];const _=f._nuxtOnBeforeMountCbs;Q(()=>{_.forEach(g=>{g()}),_.splice(0,_.length)}),J(()=>_.splice(0,_.length))}const b=f&&(f._nuxtClientOnly||X(K,!1));i&&s.isHydrating&&(l.error.value||l.data.value!==void 0)?l.status.value=l.error.value?"error":"success":f&&(!b&&s.payload.serverRendered&&s.isHydrating||t.lazy)&&t.immediate?f._nuxtOnBeforeMountCbs.push(u):t.immediate&&l.status.value!=="success"&&u();const h=V(),p=E(c,(_,g)=>{if((_||g)&&_!==g){const T=s._asyncData[g]?.data.value!==void 0,W=s._asyncDataPromises[g]!==void 0;g&&m(g);const q={cause:"initial",dedupe:t.dedupe};if(!s._asyncData[_]?._init){let w;g&&T?w=s._asyncData[g]?.data.value:(w=t.getCachedData(_,s,{cause:"initial"}),q.cachedData=w),s._asyncData[_]=$(s,_,r,t,w)}s._asyncData[_]._deps++,(t.immediate||T||W)&&s._asyncData[_].execute(q)}},{flush:"sync"}),C=t.watch?E(t.watch,()=>{l._execute({cause:"watch",dedupe:t.dedupe})}):()=>{};h&&B(()=>{p(),C(),m(c.value)})}const d={data:k(()=>s._asyncData[c.value]?.data),pending:k(()=>s._asyncData[c.value]?.pending),status:k(()=>s._asyncData[c.value]?.status),error:k(()=>s._asyncData[c.value]?.error),refresh:(...m)=>s._asyncData[c.value].execute(...m),execute:(...m)=>s._asyncData[c.value].execute(...m),clear:()=>L(s,c.value)},D=Promise.resolve(s._asyncDataPromises[c.value]).then(()=>d);return Object.assign(D,d),D}function k(e){return P({get(){return e()?.value},set(a){const n=e();n&&(n.value=a)}})}function A(e,a){return!(typeof e=="string"||typeof e=="object"&&e!==null||typeof e=="function"&&typeof a=="function")}function L(e,a){a in e.payload.data&&(e.payload.data[a]=void 0),a in e.payload._errors&&(e.payload._errors[a]=void 0),e._asyncData[a]&&(e._asyncData[a].data.value=R(e._asyncData[a]._default()),e._asyncData[a].error.value=void 0,e._asyncData[a].status.value="idle"),a in e._asyncDataPromises&&(e._asyncDataPromises[a]&&(e._asyncDataPromises[a].cancelled=!0),e._asyncDataPromises[a]=void 0)}function ee(e,a){const n={};for(const r of a)n[r]=e[r];return n}function $(e,a,n,r,t){e.payload._errors[a]??=void 0;const c=r.getCachedData!==O,s=n,o=r.deep?M:F,l=t!==void 0,u=e.hook("app:data:refresh",async d=>{(!d||d.includes(a))&&await i.execute({cause:"refresh:hook"})}),i={data:o(l?t:r.default()),pending:P(()=>i.status.value==="pending"),error:U(e.payload._errors,a),status:F("idle"),execute:(...d)=>{const[D,m=void 0]=d,f=D&&m===void 0&&typeof D=="object"?D:{};if(e._asyncDataPromises[a]){if((f.dedupe??r.dedupe)==="defer")return e._asyncDataPromises[a];e._asyncDataPromises[a].cancelled=!0}{const h="cachedData"in f?f.cachedData:r.getCachedData(a,e,{cause:f.cause??"refresh:manual"});if(h!==void 0)return e.payload.data[a]=i.data.value=h,i.error.value=void 0,i.status.value="success",Promise.resolve(h)}i.status.value="pending";const b=new Promise((h,p)=>{try{h(s(e))}catch(C){p(C)}}).then(async h=>{if(b.cancelled)return e._asyncDataPromises[a];let p=h;r.transform&&(p=await r.transform(h)),r.pick&&(p=ee(p,r.pick)),e.payload.data[a]=p,i.data.value=p,i.error.value=void 0,i.status.value="success"}).catch(h=>{if(b.cancelled)return e._asyncDataPromises[a];i.error.value=H(h),i.data.value=R(r.default()),i.status.value="error"}).finally(()=>{b.cancelled||delete e._asyncDataPromises[a]});return e._asyncDataPromises[a]=b,e._asyncDataPromises[a]},_execute:x((...d)=>i.execute(...d),0,{leading:!0}),_default:r.default,_deps:0,_init:!0,_hash:void 0,_off:()=>{u(),e._asyncData[a]?._init&&(e._asyncData[a]._init=!1),c||z(()=>{e._asyncData[a]?._init||(L(e,a),i.execute=()=>Promise.resolve())})}};return i}const ae=()=>{},O=(e,a,n)=>{if(a.isHydrating)return a.payload.data[e];if(n.cause!=="refresh:manual"&&n.cause!=="refresh:hook")return a.static.data[e]};function v(){try{return Y()}catch{return null}}function te(e,a="en"){return y(`deck-${e}-with-cards`,async()=>{const n=v(),{data:r,error:t}=await n.from("decks").select(`
        audience,
        cover_image_url,
        creator_id,
        default_lang_code,
        game_loop_id,
        icon,
        id,
        is_draft,
        is_featured,
        is_public,
        nsfw,
        theme,
        deck_translations!inner (
          badge,
          description,
          title,
          language_code
        )
      `).eq("id",e).eq("deck_translations.language_code",a).maybeSingle();if(t||!r)return console.error("Failed to load deck with cards",e,t),{};const{data:c,error:s}=await n.from("cards").select(`
        id,
        deck_id,
        card_type,
        difficulty,
        points,
        card_translations!inner (
          content,
          language_code,
          title
        )
      `).eq("deck_id",e).eq("card_translations.language_code",a);return s&&console.error("Failed to load cards for deck",e,s),{...r,cards:c??[]}})}function se(e="en"){const a=v();return y(`all-decks-${e}`,async()=>{const{data:n,error:r}=await a.from("decks").select(`
        audience,
        cover_image_url,
        creator_id,
        default_lang_code,
        game_loop_id,
        icon,
        id,
        is_draft,
        is_featured,
        is_public,
        nsfw,
        theme,
        deck_translations!inner (
          badge,
          description,
          title,
          language_code
        )
      `).eq("deck_translations.language_code",e).eq("is_public",!0).eq("is_draft",!1).order("created_at",{ascending:!1});return r?(console.error("Failed to load all decks",r),[]):n})}function ne(e=10,a="en"){const n=v();return y(`latest-decks-${e}-${a}`,async()=>{if(!n)return[];const{data:r,error:t}=await n.from("decks").select(`
        audience,
        cover_image_url,
        creator_id,
        default_lang_code,
        game_loop_id,
        icon,
        id,
        is_draft,
        is_featured,
        is_public,
        nsfw,
        theme,
        deck_translations!inner (
          badge,
          description,
          title,
          language_code
        )
      `).eq("deck_translations.language_code",a).eq("is_public",!0).eq("is_draft",!1).order("created_at",{ascending:!1}).limit(e);return t?(console.error(`Failed to load latest decks (${e})`,t),[]):r})}function ce(e,a="en"){const n=v();return y(`deck-related-${e}-decks-${a}`,async()=>{const{data:r,error:t}=await n.from("deck_tags").select("tag_id").eq("deck_id",e);if(t)return console.error("Failed to load tags for deck",e,t),[];const c=(r??[]).map(d=>d.tag_id);if(!c.length)return[];const{data:s,error:o}=await n.from("deck_tags").select("deck_id, tag_id").in("tag_id",c);if(o)return console.error("Failed to load decks for tags of deck",e,o),[];const l=Array.from(new Set((s??[]).filter(d=>String(d.deck_id)!==String(e)).map(d=>d.deck_id))).slice(0,10);if(!l.length)return[];const{data:u,error:i}=await n.from("decks").select(`
        audience,
        cover_image_url,
        creator_id,
        default_lang_code,
        game_loop_id,
        icon,
        id,
        is_draft,
        is_featured,
        is_public,
        nsfw,
        theme,
        deck_translations!inner (
          badge,
          description,
          title,
          language_code
        )
      `).in("id",l).eq("deck_translations.language_code",a).eq("is_public",!0).eq("is_draft",!1).order("created_at",{ascending:!1});return i?(console.error("Failed to load related decks info for deck",e,i),[]):u})}function ie(e,a="en"){const n=v();return y(`deck-tag-${e}-decks-${a}`,async()=>{const{data:r,error:t}=await n.from("deck_tags").select("deck_id").eq("tag_id",e);if(t)return console.error("Failed to load deck-tag rows for tag",e,t),[];const c=(r??[]).map(l=>l.deck_id);if(!c.length)return[];const{data:s,error:o}=await n.from("decks").select(`
        audience,
        cover_image_url,
        creator_id,
        default_lang_code,
        game_loop_id,
        icon,
        id,
        is_draft,
        is_featured,
        is_public,
        nsfw,
        theme,
        deck_translations!inner (
          badge,
          description,
          title,
          language_code
        )
      `).in("id",c).eq("deck_translations.language_code",a).eq("is_public",!0).eq("is_draft",!1).order("created_at",{ascending:!1});return o?(console.error("Failed to load decks info for tag",e,o),[]):s})}function oe(e,a="en"){const n=v();return y(`card-${e}-info`,async()=>{const{data:r,error:t}=await n.from("cards").select(`
        audience,
        card_type,
        creator_id,
        deck_id,
        difficulty,
        id,
        nsfw,
        points,
        card_translations!inner (
          id,
          content,
          language_code,
          title
        )
      `).eq("id",e).eq("card_translations.language_code",a).maybeSingle();return t?(console.error("Failed to load card info for card",e,t),{}):r||{}})}function de(e,a="en"){return te(e,a)}function le(e,a="en"){const n=v();return y(`card-tag-${e}-cards-${a}`,async()=>{const{data:r,error:t}=await n.from("card_tags").select(`
        card_id,
        tag_id,
        tags!inner (
          id,
          name
        )
      `).eq("tag_id",e);if(t)return console.error("Failed to load card-tag rows for tag",e,t),[];const c=(r??[]).map(u=>u.card_id);if(!c.length)return[];const{data:s,error:o}=await n.from("cards").select(`
        audience,
        card_type,
        creator_id,
        deck_id,
        difficulty,
        id,
        nsfw,
        points,
        card_translations!inner (
          id,
          content,
          language_code,
          title
        )
      `).in("id",c).eq("card_translations.language_code",a);return o?(console.error("Failed to load cards info for tag",e,o),[]):(s??[]).map(u=>({...u,tags:r.filter(i=>i.card_id===u.id).map(i=>({id:i.tags.id,name:i.tags.name}))}))})}function ue(e="en"){const a=v();return y("all-cards",async()=>{const{data:n,error:r}=await a.from("cards").select(`
        audience,
        card_type,
        creator_id,
        deck_id,
        difficulty,
        id,
        nsfw,
        points,
        card_translations!inner (
          id,
          content,
          language_code,
          title
        )
      `).eq("card_translations.language_code",e).order("created_at",{ascending:!1});return r?(console.error("Failed to load all cards",r),[]):n})}function fe(e="en"){const a=v();return y("tags",async()=>{const{data:n,error:r}=await a.from("tags").select("id, name");return r?(console.error("Failed to load tags",r),[]):n})}function _e(e,a="en"){const n=v();return y(`search-decks-${e}-${a}`,async()=>{if(!e||e.trim().length===0)return[];const r=e.trim().toLowerCase(),{data:t,error:c}=await n.from("decks").select(`
        audience,
        cover_image_url,
        creator_id,
        default_lang_code,
        game_loop_id,
        icon,
        id,
        is_draft,
        is_featured,
        is_public,
        nsfw,
        theme,
        deck_translations!inner (
          badge,
          description,
          title,
          language_code
        )
      `).eq("deck_translations.language_code",a).eq("is_public",!0).eq("is_draft",!1).order("created_at",{ascending:!1});return c?(console.error("Failed to fetch decks for search",c),[]):(t??[]).filter(o=>{const l=o.deck_translations?.[0];if(!l)return!1;const u=(l.title||"").toLowerCase(),i=(l.description||"").toLowerCase();return u.includes(r)||i.includes(r)})})}function ge(e,a="en"){const n=v();return y(`search-cards-${e}-${a}`,async()=>{if(!e||e.trim().length===0)return[];const r=e.trim().toLowerCase(),{data:t,error:c}=await n.from("cards").select(`
        audience,
        card_type,
        creator_id,
        deck_id,
        difficulty,
        id,
        nsfw,
        points,
        card_translations!inner (
          id,
          content,
          language_code,
          title
        )
      `).eq("card_translations.language_code",a).order("created_at",{ascending:!1});return c?(console.error("Failed to fetch cards for search",c),[]):(t??[]).filter(o=>{const l=o.card_translations?.[0];if(!l)return!1;const u=(l.title||"").toLowerCase(),i=(l.content||"").toLowerCase(),d=(o.card_type||"").toLowerCase();return u.includes(r)||i.includes(r)||d.includes(r)})})}export{de as a,ne as b,ce as c,oe as d,fe as e,ue as f,te as g,le as h,se as i,ie as j,_e as k,ge as s,y as u};
