import { createServer, Model } from 'miragejs';

createServer({
    models: {
        projects: Model,
    },

    seeds(server) {
        server.create('project', {
            id: '1',
            name: 'Kensington Apartment',
            services: 'Architectural Design, Interior Design, Procurement, Project Management',
            description:
                "A creative approach in crafting the cabin's structure, strategically integrating the existing trees into the architecture of the house garden design to create a harmonious conversation area. A distinctive and irregular shape was conceptualized to seamlessly incorporate the majestic existing trees, enhancing the overall sensory experience within the cabin's interior design.",
            imageUrl:
                'https://images.pexels.com/photos/2079246/pexels-photo-2079246.jpeg?auto=compress&cs=tinysrgb&w=600',
            type: 'residential',
        });
        server.create('project', {
            id: '2',
            name: 'CITY GALLERY',
            services: 'Interior Design, Project Co-ordination, Procurement, Styling',
            description:
                'Created a versatile gallery space by implementing a modular design with multiple mounting points for track lighting, projectors, and other fixtures. Various sockets facilitate easy connections for electricity and essential systems. Arched passages are accentuated with floor-level illumination in a warm white color, enhancing the overall gallery ambiance.',
            imageUrl:
                'https://images.pexels.com/photos/2149422/pexels-photo-2149422.jpeg?auto=compress&cs=tinysrgb&w=600',
            type: 'commerical',
        });
        server.create('project', {
            id: '3',
            name: 'SIAIVO DIVE BAR',
            services: 'Interior Design, Project Co-ordination, Procurement, Styling',
            description:
                'Preserving the charm of exposed brickwork and arched windows, our interior design for the cocktail bar navigated the challenges of a tight and awkwardly shaped space. Careful space planning led to a bespoke angular coffee counter, enhancing customer flow while maximizing efficiency for staff and storage. ',
            imageUrl:
                'https://images.pexels.com/photos/1001965/pexels-photo-1001965.jpeg?auto=compress&cs=tinysrgb&w=600',
            type: 'commercial',
        });
        server.create('project', {
            id: '4',
            name: 'MECCA COFFEE SHOP',
            services: 'Interior Design, Project Co-ordination, Procurement, Styling',
            description:
                'An expansive window floods the space with cinematic light. The high ceiling inspired a dual-purpose design, transforming the venue from a daytime coffee shop to a nighttime bar. Unconventional seating, including window seats and a lengthy table along the handrail, adds a unique touch to the traditional bar experience.',
            imageUrl:
                'https://images.pexels.com/photos/1579739/pexels-photo-1579739.jpeg?auto=compress&cs=tinysrgb&w=600',
            type: 'commercial',
        });
        server.create('project', {
            id: '5',
            name: 'Hampstead Home',
            services:
                'Interior Architecture, Interior Design, Project Co-ordination, Procurment, Styling',
            description:
                "The house's unique layouts inspired an intelligent spatial design. Highlights include a bespoke bar with a rotating door and backlit shelving for regular guest entertainment. Each room features distinct design hues, emphasizing form and enhancing light, creating a harmonious blend of creativity and practicality. ",
            imageUrl:
                'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=600',
            type: 'residential',
        });
        server.create('project', {
            id: '6',
            name: 'Green Wonder',
            services:
                'Interior Architecture, Interior Design, Project Co-ordination, Procurment, Styling',
            description:
                'Our apartment interior design maintains an open feel with sliding and bifold screens made of Japanese rice paper. These screens allow light transmission while effectively separating the bedroom and dressing room from the living area, achieving a stylish and functional balance.',
            imageUrl:
                'https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg?auto=compress&cs=tinysrgb&w=600',
            type: 'residential',
        });
    },

    routes() {
        this.namespace = 'api';

        this.get('/projects', (schema, request) => {
            return schema.projects.all();
        });

        this.get('/projects/:id', (schema, request) => {
            let id = request.params.id;

            return schema.projects.find(id);
        });
    },
});
