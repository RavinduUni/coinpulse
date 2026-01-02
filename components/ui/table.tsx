"use client"

import * as React from "react"

import { cn } from "@/lib/utils"

/**
 * Renders a table element wrapped in a horizontally scrollable container with standardized classes and data-slot attributes.
 *
 * @param className - Additional class names merged with the component's default table classes.
 * @param props - Props forwarded to the underlying `table` element.
 * @returns The rendered table inside a div with `data-slot="table-container"`; remaining props are spread onto the `table`.
 */
function Table({ className, ...props }: React.ComponentProps<"table">) {
  return (
    <div
      data-slot="table-container"
      className="relative w-full overflow-x-auto"
    >
      <table
        data-slot="table"
        className={cn("w-full caption-bottom text-sm", className)}
        {...props}
      />
    </div>
  )
}

/**
 * Renders a styled table header element with a data-slot for slot-based styling.
 *
 * @param className - Additional CSS class names to merge with the component's base classes
 * @param props - Additional props are forwarded to the underlying `thead` element
 * @returns A `thead` element with `data-slot="table-header"`, merged classes (including row bottom-border rules), and all forwarded props
 */
function TableHeader({ className, ...props }: React.ComponentProps<"thead">) {
  return (
    <thead
      data-slot="table-header"
      className={cn("[&_tr]:border-b", className)}
      {...props}
    />
  )
}

/**
 * Renders a tbody element with the module's standardized table-body slot classes and forwarded props.
 *
 * @returns The rendered `tbody` element with `data-slot="table-body"` and merged `className` including `[&_tr:last-child]:border-0`.
 */
function TableBody({ className, ...props }: React.ComponentProps<"tbody">) {
  return (
    <tbody
      data-slot="table-body"
      className={cn("[&_tr:last-child]:border-0", className)}
      {...props}
    />
  )
}

/**
 * Renders a table footer (<tfoot>) with predefined styling and a data-slot attribute.
 *
 * @param className - Additional CSS classes to merge with the component's default footer classes
 * @returns The rendered `<tfoot>` element with merged `className`, `data-slot="table-footer"`, and all other passed props spread onto it
 */
function TableFooter({ className, ...props }: React.ComponentProps<"tfoot">) {
  return (
    <tfoot
      data-slot="table-footer"
      className={cn(
        "bg-muted/50 border-t font-medium [&>tr]:last:border-b-0",
        className
      )}
      {...props}
    />
  )
}

/**
 * Renders a table row (<tr>) element with standardized classes and a data-slot attribute for styling.
 *
 * Merges the provided `className` with default row classes and passes all other props through to the underlying `<tr>`.
 *
 * @param className - Additional CSS classes to merge with the component's default row classes
 * @returns A `<tr>` React element with default styling, `data-slot="table-row"`, and any provided props applied
 */
function TableRow({ className, ...props }: React.ComponentProps<"tr">) {
  return (
    <tr
      data-slot="table-row"
      className={cn(
        "hover:bg-muted/50 data-[state=selected]:bg-muted border-b transition-colors",
        className
      )}
      {...props}
    />
  )
}

/**
 * Render a table header cell with standardized classes, a data-slot attribute, and support for merged props.
 *
 * The element applies spacing, alignment, and typography utilities and adjusts padding/translation when a checkbox child is present.
 *
 * @returns The rendered `<th>` element with merged `className`, `data-slot="table-head"`, and any forwarded props.
 */
function TableHead({ className, ...props }: React.ComponentProps<"th">) {
  return (
    <th
      data-slot="table-head"
      className={cn(
        "text-foreground h-10 px-2 text-left align-middle font-medium whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
        className
      )}
      {...props}
    />
  )
}

/**
 * Renders a table cell (<td>) element with standardized styling and a data-slot attribute.
 *
 * @param className - Additional CSS classes to merge with the component's default classes
 * @param props - Other props forwarded to the underlying `<td>` element
 * @returns A `<td>` element with merged class names and `data-slot="table-cell"`
 */
function TableCell({ className, ...props }: React.ComponentProps<"td">) {
  return (
    <td
      data-slot="table-cell"
      className={cn(
        "p-2 align-middle whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
        className
      )}
      {...props}
    />
  )
}

/**
 * Renders a styled table caption element used for table descriptions.
 *
 * @param className - Additional CSS classes merged with the component's default caption styles.
 * @returns The caption element with default muted styling, top margin, small text, and `data-slot="table-caption"`.
 */
function TableCaption({
  className,
  ...props
}: React.ComponentProps<"caption">) {
  return (
    <caption
      data-slot="table-caption"
      className={cn("text-muted-foreground mt-4 text-sm", className)}
      {...props}
    />
  )
}

export {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
}