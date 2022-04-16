// DOC
// Make sass understand classname as code

declare module '*.scss'{
  const content: {[className: string]: string}
  export = content;
}
