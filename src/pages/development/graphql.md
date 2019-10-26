---
title: "GraphQL"
tag: ["dev","graphql"]
---

### Complete list of operators

<div class="card">
    <ul>
        <li><pre class="pre-sm">eq</pre> : short for <b>equal</b>, must match the given data exactly</li>
        <li><pre class="pre-sm">ne</pre> : short for <b>not equal</b>, must be different from the given data</li>
        <li><pre class="pre-sm">regex</pre> : short for <b>regular expression</b>, must match the given patter. Note that backslashes need to be escaped twice, so <code>/\w+/</code> needs to be written as <code>"/\\\\w+/"</code></li>
        <li><pre class="pre-sm">glob</pre> : short for <b>global</b>, allows to use wilcard <code>*</code> which acts as a placeholder for any non-empty string</li>
        <li><pre class="pre-sm">in</pre> : short for <b>in array</b>, must be an element of the array</li>
        <li><pre class="pre-sm">nin</pre> : short for <b>not in array</b>, must NOT be an element of the array</li>
        <li><pre class="pre-sm">gt</pre> : short for <b>greater than</b>, must be greater than given value</li>
        <li><pre class="pre-sm">gte</pre> : short for <b>great than or equal</b>, must be greater than or equal to given value</li>
        <li><pre class="pre-sm">lt</pre> : short for <b>less than</b>, must be less than given value</li>
        <li><pre class="pre-sm">lte</pre> : short for <b>less than or equal</b>, must be less than or equal to given value</li>
        <li><pre class="pre-sm">elemMatch</pre> : short for <b>element match</b>, this indicates that the field you are filtering will return as array of elements, on which you can apply a filter using the previous operators</li>
        <section>GraphiQL can be found at localhost:8000/___graphql</section>
    </ul>
</div>

