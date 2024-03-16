import { getCollection } from 'astro:content'


export const getTests = async () => {
	return (await getCollection('tests') || [])
		.sort((a, b) => a.data.pubDate.valueOf() - b.data.pubDate.valueOf())
}


export const getCodeBlockContent = (content) => {

	//const JSCodeBlockRegex = /```(?:js|javascript)\n([\s\S]*?)```$/gm

	//FIXME: update logic to use regular expression

	let res  = content.split('```')[1] || '';
	res = content.replace(/(\r\n|\n|\r|\t)/gm, "");
	return res
}