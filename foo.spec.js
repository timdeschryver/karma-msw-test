// foo.spec.js
const { expect } = require( 'chai' );
import { worker } from './worker';

describe( 'Fetching foo', function(){
    this.beforeAll( () => worker.start() );
    this.afterAll( () => worker.stop() );

    it( 'should handle foo', function(){
        return fetch( '/foo' ).then( ( response ) => response.text() ).then( function( data ){
            expect( data ).to.equal( 'foo' );
        } );
    } );     
} );