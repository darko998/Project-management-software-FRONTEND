import Home from './views/Home.vue'
import Projects from './views/Projects.vue'
import SingleProject from './views/SingleProject.vue'
import CreateProject from './views/CreateProject.vue'

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
	}
]