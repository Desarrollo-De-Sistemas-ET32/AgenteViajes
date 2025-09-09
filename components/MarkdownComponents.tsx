export const MarkdownComponents = {
    table: ({ children, ...props }: any) => (
      <div className="overflow-x-auto my-4">
        <table className="w-full border-collapse border border-border rounded-lg" {...props}>
          {children}
        </table>
      </div>
    ),
    thead: ({ children, ...props }: any) => (
      <thead className="bg-muted/50" {...props}>
        {children}
      </thead>
    ),
    tbody: ({ children, ...props }: any) => (
      <tbody {...props}>
        {children}
      </tbody>
    ),
    tr: ({ children, ...props }: any) => (
      <tr className="border-b border-border hover:bg-muted/30 transition-colors" {...props}>
        {children}
      </tr>
    ),
    th: ({ children, ...props }: any) => (
      <th className="border-r border-border px-3 py-2 text-left font-semibold text-sm" {...props}>
        {children}
      </th>
    ),
    td: ({ children, ...props }: any) => (
      <td className="border-r border-border px-3 py-2 text-sm last:border-r-0" {...props}>
        {children}
      </td>
    ),
   
    code: ({ inline, children, ...props }: any) => 
      inline ? (
        <code className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono" {...props}>
          {children}
        </code>
      ) : (
        <pre className="bg-muted p-4 rounded-lg overflow-x-auto my-4">
          <code className="text-sm font-mono" {...props}>
            {children}
          </code>
        </pre>
      ),
      
    blockquote: ({ children, ...props }: any) => (
      <blockquote className="border-l-4 border-border pl-4 py-2 my-4 italic text-muted-foreground" {...props}>
        {children}
      </blockquote>
    ),
    ul: ({ children, ...props }: any) => (
      <ul className="list-disc pl-6 my-4 space-y-1" {...props}>
        {children}
      </ul>
    ),
    ol: ({ children, ...props }: any) => (
      <ol className="list-decimal pl-6 my-4 space-y-1" {...props}>
        {children}
      </ol>
    ),
    li: ({ children, ...props }: any) => (
      <li className="text-sm md:text-base" {...props}>
        {children}
      </li>
    ),
    h1: ({ children, ...props }: any) => (
      <h1 className="text-xl md:text-2xl font-bold mt-6 mb-4 first:mt-0" {...props}>
        {children}
      </h1>
    ),
    h2: ({ children, ...props }: any) => (
      <h2 className="text-lg md:text-xl font-semibold mt-5 mb-3 first:mt-0" {...props}>
        {children}
      </h2>
    ),
    h3: ({ children, ...props }: any) => (
      <h3 className="text-base md:text-lg font-medium mt-4 mb-2 first:mt-0" {...props}>
        {children}
      </h3>
    ),
    p: ({ children, ...props }: any) => (
      <p className="mb-3 last:mb-0" {...props}>
        {children}
      </p>
    ),
    a: ({ children, href, ...props }: any) => (
      <a 
        href={href} 
        className="text-primary hover:text-primary/80 underline transition-colors" 
        target="_blank" 
        rel="noopener noreferrer"
        {...props}
      >
        {children}
      </a>
    ),
  };