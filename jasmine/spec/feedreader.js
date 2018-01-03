/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* The for loop help us to determine the url is defined and
           not empty
         */

        it('Have URL defined and not Empty', function() {
            allFeeds.forEach(function(feed){
                expect(feed.url).toBeDefined();
                expect(feed.url.length).not.toBe(0);
            });
        });
        /* The for loop help us to determine the name is defined and 
           not empty
         */

        it('Have Name defined and not Empty', function() {
            allFeeds.forEach(function(feed){
                expect(feed.name).toBeDefined();
                expect(typeof feed.name).toEqual('string');
                expect(feed.name.lenght).toBeGreaterThan(0);
            });
        });
    });


    /* Menu test function */
    describe('The menu', function(){

        // Test if the menu hidden as default or not
         
        it('Hiding Menue as Default', function() {
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });

         //Test if the menu is display or hide when it clicked
         
        it('Menu can display and hide when clicked', fucntion() {
            $('.menu-icon-link').click();
            expect($('body').hasClass('menu-hidden')).toBe(false);

            $('.menu-icon-link').click();
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });

    });

        

        

    // "Initial Entries" test function 
    describe('Initia Entries', fucntion(){

        //beforeEach allows for use of asynchronous loadFeed()
        beforeEach(function(done){
            loadFeed(0, done);
        });

        //test that there is at least one entry in feed
        it('At least a single entry when loaded', function(done) {
            expect($('.feed .entry').length).toBeGreaterThan(0);
            done();
        });

    });

      
    // "New Feed Selection" test function
    describe('New Feed Selection', function(){

        var $feed,
            $newFeed;

        //test that new content is loaded by loadFeed()
        beforeEach(function(done){
            loadFeed(0, function(){
                feed = $('.feed').html();
                done();
            });
          
         });

        it('Changes Feed Content when reloaded', function(done){
            loadFeed(1,function(){
                newFeed = $('.feed').html();
                expect(newFeed).not.toEqual(feed);
                done();
            });
        });
       
    });

}());
