import Home from './views/Home.vue'
import Projects from './views/Projects.vue'
import SingleProject from './views/SingleProject.vue'
import CreateProject from './views/CreateProject.vue'
import Companies from './views/Companies.vue'
import CreateCompany from './views/CreateCompany.vue'
import EditCompany from './views/EditCompany.vue'

export default [
	{
		path: "/",
		component: Home,
		name: 'home'
	},
	{
		path: "/projects",
		component: Projects,
		name: 'projects'
	},
	{
		path: "/projects/create",
		component: CreateProject,
		name: 'createProject'
	},
	{
		path: "/projects/:id",
		component: SingleProject,
		name: 'singleProject'
	},
	{
		path: "/companies",
		component: Companies,
		name: 'companies'
	},
	{
		path: "/companies/create",
		component: CreateCompany,
		name: 'createCompany'
	},
	{
		path: "/companies/:id/edit",
		component: EditCompany,
		name: 'editCompany'
	}
]