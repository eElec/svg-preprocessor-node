import { JSDOM } from 'jsdom';
import processSvg from './processSvg';

const svgProcessor = (svgString: string) => {
	const svgParser = new JSDOM(svgString, {
		contentType: 'image/svg+xml',
	});

	const svgElement = svgParser.window.document.documentElement;

	if (svgElement.tagName === 'svg') return processSvg(svgElement).outerHTML;
	else
		throw new Error(`Expected svg element, got ${svgElement.tagName} element.`);
};

export = svgProcessor;
