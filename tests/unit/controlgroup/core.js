define( [
	"jquery",
	"ui/controlgroup",
	"ui/checkboxradio",
	"ui/selectmenu",
	"ui/button"
], function( $ ) {

module( "Controlgroup: Core" );

function hasCornerClass( element ) {
	return !!element.attr( "class" ).match( /ui-corner/g );
}

test( "selectmenu: open/close corners", function( assert ) {
	expect( 1 );
	var element = $( ".controlgroup" ).controlgroup(),
		selects = element.find( "select" ),
		selectButton = selects.eq( 0 ).selectmenu( "widget" );

	expect( 12 );

	selects.eq( 0 ).selectmenu( "open" );
	assert.hasClasses( selectButton, "ui-corner-tl",
		"Horizontal: First selectmenu gets ui-corner-tl when opened" );

	selects.eq( 0 ).selectmenu( "close" );
	assert.hasClasses( selectButton, "ui-corner-left",
		"Horizontal: First selectmenu gets ui-corner-left when closed" );

	selectButton = selects.eq( 1 ).selectmenu( "widget" );
	selects.eq( 1 ).selectmenu( "open" );
	strictEqual( hasCornerClass( selectButton ), false,
		"Horizontal: Middle selectmenu does not get corner class when opened" );

	selects.eq( 1 ).selectmenu( "close" );
	strictEqual( hasCornerClass( selectButton ), false,
		"Horizontal: Middle selectmenu does not get corner class when closed" );

	selectButton = selects.eq( 2 ).selectmenu( "widget" );
	selects.eq( 2 ).selectmenu( "open" );
	assert.hasClasses( selectButton, "ui-corner-tr",
		"Horizontal: Last selectmenu gets ui-corner-tr when opened" );

	selects.eq( 2 ).selectmenu( "close" );
	assert.hasClasses( selectButton, "ui-corner-right",
		"Horizontal: Last selectmenu gets ui-corner-right when closed" );

	element.controlgroup( "option", "direction", "vertical" );
	selectButton = selects.eq( 0 ).selectmenu( "widget" );
	selects.eq( 0 ).selectmenu( "open" );
	assert.hasClasses( selectButton, "ui-corner-top",
		"vertical: First selectmenu gets ui-corner-top when opened" );

	selects.eq( 0 ).selectmenu( "close" );
	assert.hasClasses( selectButton, "ui-corner-top",
		"vertical: First selectmenu gets ui-corner-top when closed" );

	selectButton = selects.eq( 1 ).selectmenu( "widget" );
	selects.eq( 1 ).selectmenu( "open" );
	strictEqual( hasCornerClass( selectButton ), false,
		"vertical: Middle selectmenu does not get corner class when opened" );

	selects.eq( 1 ).selectmenu( "close" );
	strictEqual( hasCornerClass( selectButton ), false,
		"vertical: Middle selectmenu does not get corner class when closed" );

	selectButton = selects.eq( 2 ).selectmenu( "widget" );
	selects.eq( 2 ).selectmenu( "open" );
	strictEqual( hasCornerClass( selectButton ), false,
		"vertical: Last selectmenu does not get corner class when opened" );

	selects.eq( 2 ).selectmenu( "close" );
	assert.hasClasses( selectButton, "ui-corner-bottom",
		"vertical: Last selectmenu gets ui-corner-bottom when closed" );
});
test( "invisibles excluded from corner classes", function( assert ) {
	expect( 2 );
	var element = $( ".controlgroup" ).controlgroup(),
		buttons = element.children( ".ui-button" );
	strictEqual( hasCornerClass( buttons.eq( 0 ) ), false,
		"ExcludeInvisible: true: Hidden first element does not get a corner class" );
	assert.hasClasses( buttons.eq( 1 ), "ui-corner-left",
		"ExcludeInvisible: true: First button is hidden second button get corner class" );
});

} );