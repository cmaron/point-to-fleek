walk(document.body);

function walk(node)
{
	// I stole this function from here:
	// http://is.gd/mwZp7E

	var child, next;

	switch ( node.nodeType )
	{
		case 1:  // Element
		case 9:  // Document
		case 11: // Document fragment
			child = node.firstChild;
			while ( child )
			{
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;

		case 3: // Text node
			handleText(node);
			break;
	}
}

function handleText(textNode)
{
	var v = textNode.nodeValue;

	v = v.replace(/\bOn Point\b/g, "On Fleek");
	v = v.replace(/\bOn point\b/g, "On fleek");
	v = v.replace(/\bon Point\b/g, "on Fleek");
	v = v.replace(/\bon point\b/g, "on fleek");

	textNode.nodeValue = v;
}
