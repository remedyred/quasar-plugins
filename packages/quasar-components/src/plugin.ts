import {App} from 'vue'
import {version} from '../package.json'
import {kebabCase} from '@snickbit/utilities'
import * as components from './ui'

type ComponentType = any

export interface PluginInstance {
	version: string
	install(app: App): void
}

export default function(): PluginInstance {
	const installTargets: App[] = []

	function registerComponent(app: App, name: string, component: ComponentType): void {
		const registered = app.component(name)

		if (!registered) {
			app.component(name, component)
		}
	}

	function install(app: App): void {
		if (installTargets.includes(app)) {
			return
		}

		installTargets.push(app)

		if (components) {
			for (const name of Object.keys(components)) {
				const component = components[name]
				const alias = kebabCase(name)
				registerComponent(app, name, component)
				if (alias) {
					registerComponent(app, alias, component)
				}
			}
		}
	}

	return {
		version,
		install
	}
}
