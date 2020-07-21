
function load(name) {
  // return resolve => require([`views/${component}`], resolve);
  return resolve => require ([`views/${name}`], resolve);
}

const routes =[
  {
    path: '/',
    name:'login',
    component: load('longin'),
    meta:{
      title:'首页'
    },
    hidden: true
  },
  {
    path:'*',
    redirect:{
      path:'/'
    }
  }
]

export default routes
