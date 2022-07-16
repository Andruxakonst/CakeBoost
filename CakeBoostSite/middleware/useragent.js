export default function(context) {
  context.userAgent = process.server
    ? context.req.headers["user-agent"]
    : navigator.userAgent;
  if (context.userAgent.includes("Chrome-Lighthouse")) {
    context.store.commit("set_is_page_speed", 'page_speed_fix');
  } 
}
