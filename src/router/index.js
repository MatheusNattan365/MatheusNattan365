import Vue from 'vue'
import VueRouter from 'vue-router'

import CadPaciente from '../views/CadPacientes'
import CadExames from '../views/CadExames'
import Relatorios from '../views/Relatorios.vue'
import Login from '../views/Login.vue'

import firebase from 'firebase';

Vue.use(VueRouter)


  const router = new VueRouter({
    
    routes: [
        { path: '/cadPacientes', 
          component: CadPaciente,
          name: 'cadpacientes',
          meta:{
            requiresAuth: true
          } 
        },

        { path: '/cadExames', 
          component: CadExames,
          name: 'cadexames',
          meta:{
            requiresAuth: true
          }  
        },

        { path: '/relatorios', 
          component: Relatorios,
          name: 'relatorios',
          meta:{
            requiresAuth: true
          }  
        },

        { path: '/login', 
          component: Login,
          name: 'login',
          meta:{
            requiresGuest: true
          }  
        }
      ]
  })

  
  // Nav Guard
router.beforeEach((to, from, next) => {
  // Check for requiresAuth guard
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // Check if NO logged user
    if (!firebase.auth().currentUser) {
      // Go to login
      next({
        path: '/login',
        query: {
          redirect: to.fullPath
        }
      });
    } else {
      // Proceed to route
      next();
    }
  } else if (to.matched.some(record => record.meta.requiresGuest)) {
    // Check if NO logged user
    if (firebase.auth().currentUser) {
      // Go to login
      next({
        path: '/',
        query: {
          redirect: to.fullPath
        }
      });
    } else {
      // Proceed to route
      next();
    }
  } else {
    // Proceed to route
    next();
  }
});

export default router;

