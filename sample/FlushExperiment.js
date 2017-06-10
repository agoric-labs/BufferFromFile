// Sample flush written data to hard drive

try
{
  var BufferFromFile = require( 'bufferfromfile' );
}
catch( err )
{
  var BufferFromFile = require( '..' );
}

// mmap file

var filePath = __dirname + '/TestFile.txt';
var descriptor = BufferFromFile( filePath );
var buffer = descriptor.Uint8Array();

buffer[ 0 ] = 48 + Math.round( Math.random()*9 );

BufferFromFile.flush( buffer );

console.log( "OK" );

buffer[ 0 ] = 48 + Math.round( Math.random()*9 );

BufferFromFile.flush({ buffer : buffer } );

console.log( "OK" );

BufferFromFile.unmap( buffer );