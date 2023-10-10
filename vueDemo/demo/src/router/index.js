import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/input',
      name: 'input',
      component: input => require(['@/components/input'], input)
    },
    {
      path: '/radio',
      name: 'radio',
      component: radio => require(['@/components/radio'], radio)
    },
    {
      path: '/treeSelect',
      name: 'treeSelect',
      component: treeSelect => require(['@/components/treeSelect'], treeSelect)
    },
    {
      path: '/dynamicTable',
      name: 'dynamicTable',
      component: dynamicTable => require(['@/components/dynamicTable'], dynamicTable)
    },
    {
      path: '/table',
      name: 'table',
      component: table => require(['@/components/table'], table)
    },
    {
      path: '/dynamicValidateForm',
      name: 'dynamicValidateForm',
      component: dynamicValidateForm => require(['@/components/dynamicValidateForm'], dynamicValidateForm)
    },
    {
      path: '/cascader',
      name: 'cascader',
      component: cascader => require(['@/components/cascader'], cascader)
    },
    {
      path: '/websocket',
      name: 'websocket',
      component: websocket => require(['@/components/websocket'], websocket)
    },
    {
      path: '/websocket2',
      name: 'websocket2',
      component: websocket => require(['@/components/websocket2'], websocket)
    },
    {
      path: '/handUpload',
      name: 'handUpload',
      component: handUpload => require(['@/components/handUpload'], handUpload)
    },
    {
      path: '/tableDemo',
      name: 'tableDemo',
      component: tableDemo => require(['@/components/tableDemo'], tableDemo)
    },
    {
      path: '/select',
      name: 'select',
      component: select => require(['@/components/select'], select)
    },
    {
      path: '/layout',
      name: 'layout',
      component: layout => require(['@/components/layout'], layout)
    },
    {
      path: '/gdw',
      name: 'gdw',
      component: gdw => require(['@/components/gdw'], gdw)
    },
    {
      path: '/qnmgdw',
      name: 'qnmgdw',
      component: qnmgdw => require(['@/components/qnmgdw'], qnmgdw)
    }



    
  ]
})
