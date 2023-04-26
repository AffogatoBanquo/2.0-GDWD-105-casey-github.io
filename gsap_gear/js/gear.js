 // Moving the gear
        // The element is selected, add some properties to this GSAP method to rotate the gear infinitely. 
        gsap.from("#gear_outer",{
            transformOrigin:"50% 50%",
            // Duration: smaller # would be spinning small increment very fast infinateyly
            duration: 12,
            // Rotation:
            rotation: 360,
            // Repeat: amy nymber, the animation will repeat that# of times, but '-1' is infinite
            repeat: -1,
            ease: "none",
        });

        // Make a gsap method to have the title text start from above the clipping circle.

        gsap.from("#main-text",{
            duration: 4,
            ease: "expo",
            y: -300,
            delay: 0.5,
        });

        // Here, make a gsap method that sets each line on the bridge to start from underneath the clipping circle and transition to where it must go.

        gsap.from(".stagger",{
            duration: 4,
            y: 300,
            ease: "expo",
            stagger: 0.1,
        });

        // Note, you'll likely need to add a class to those lines in order to select them with GSAP effectively.

        gsap.to("#inner_ring", {
            transformOrigin: "50% 50%",
            scale: 1.05,
            yoyo: true,
            delay: 3,
            repeat: -1,
            ease: "elastic",
            repeatDelay: 2,
            duration: 1,
        
        });

        // Bonus: identify the outer ring of the logo (inside the gear shape) by placing an ID on that svg path.
        // Make a gsap method to make it periodically "pop" bin and out of place.

        