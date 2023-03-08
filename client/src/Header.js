import React from "react";
//props e para acessar esaber que eu estou deniniind esses valores dinamicamente
export default function Hearder({children} ) {
  return (
    <header>
      <h1>{children}</h1>
    </header>)
}