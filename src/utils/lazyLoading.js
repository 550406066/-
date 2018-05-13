export default (name) => () => import(`@/components/${name}.vue`)
// export default import(`@/components/info.vue`)