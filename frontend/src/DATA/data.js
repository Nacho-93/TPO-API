
const data = [
    
        {
            "id": 0,
            "image_profile": "images/tutor1.jpg",
            "name": "Juan",
            "lastName": "Perez",
            "description": "¡Hola! Soy un tutor dedicado y experimentado en programación aquí para ayudarte a dominar el arte de la codificación. Poseo un profundo conocimiento de diversos lenguajes de programación y paradigmas. Mi objetivo es empoderar a estudiantes como tú con el conocimiento y las habilidades necesarias para destacar en el mundo de la programación.",
            "email": "juan.perez@example.com",
            "phone": "123-456-7890",
            "courses": [
              {
                "title": "Matemáticas",
                "price_hour": "3050",
                "info_course": [true, true, true, true],
                "course_description":"Este emocionante curso de matemáticas te sumergirá en el mundo de los números, las ecuaciones y la resolución de problemas. Desde álgebra hasta cálculo, explorarás conceptos matemáticos fundamentales y técnicas avanzadas. Aprenderás a abordar desafiantes problemas matemáticos con confianza y a aplicar estas habilidades en la vida cotidiana y en la toma de decisiones.",
                "frequency": [2, "semana"],
                "reviews": []
              }
            ]
          },
          {
            "id": 1,
            "image_profile": "images/tutor2.jpg",
            "name": "Maria",
            "lastName": "Gonzalez",
            "description": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur odio odit id repellendus corporis magni officiis corrupti culpa dicta totam dolorem, nihil, ratione reprehenderit consequatur, voluptas quia officia! Reiciendis tempore nostrum ipsum ab, corporis voluptatum velit eius incidunt labore quisquam hic possimus atque id veniam nisi sequi, corrupti molestiae eos soluta suscipit architecto! Placeat alias animi consequuntur soluta nemo. Accusantium, vero. Quos non nulla aperiam consectetur laboriosam eligendi, explicabo dolore quibusdam.",
            "email": "maria.gonzalez@example.com",
            "phone": "987-654-3210",
            "courses": [
              {
                "title": "Programación Web",
                "price_hour": "2500",
                "info_course": [true, false, true, false],
                "course_description":"Este emocionante curso de matemáticas te sumergirá en el mundo de los números, las ecuaciones y la resolución de problemas. Desde álgebra hasta cálculo, explorarás conceptos matemáticos fundamentales y técnicas avanzadas. Aprenderás a abordar desafiantes problemas matemáticos con confianza y a aplicar estas habilidades en la vida cotidiana y en la toma de decisiones.",
                "frequency": [3, "semana"],
                "reviews": [
                  {
                    "comment": "Excelente tutora lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quia Excelente tutora lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quia Excelente tutora lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quia",
                    "user_name": "Ana",
                    "date": "2021-05-15",
                    "rating": 4
                  },
                  {
                    "comment": "Excelente profesora loco lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quia Excelente tutora lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quia Excelente tutora lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quia",
                    "user_name": "Jose",
                    "date": "2021-05-15",
                    "rating": 5
                  }
                ]
              }
            ]
          },
          {
            "id": 2,
            "image_profile": "images/tutor3.jpg",
            "name": "Carlos",
            "lastName": "Lopez",
            "description": "¡Hola! Soy un tutor dedicado y experimentado en programación aquí para ayudarte a dominar el arte de la codificación. Poseo un profundo conocimiento de diversos lenguajes de programación y paradigmas. Mi objetivo es empoderar a estudiantes como tú con el conocimiento y las habilidades necesarias para destacar en el mundo de la programación.",
            "email": "carlos.lopez@example.com",
            "phone": "555-123-4567",
            
            "courses": [
              {
                "title": "Química",
                "price_hour": "2800",
                "info_course": [true, true, true, true],
                "course_description":"Este emocionante curso de matemáticas te sumergirá en el mundo de los números, las ecuaciones y la resolución de problemas. Desde álgebra hasta cálculo, explorarás conceptos matemáticos fundamentales y técnicas avanzadas. Aprenderás a abordar desafiantes problemas matemáticos con confianza y a aplicar estas habilidades en la vida cotidiana y en la toma de decisiones.", 
                "frequency": [1, "mes"],
                "reviews": [{
                    "comment": "Me distraje por la belleza del carlitos",
                    "user_name": "Javier",
                    "date": "2023-06-15",
                    "rating": 5
                  }]
              }
            ]
          },
          {
            "id": 3,
            "image_profile": "images/tutor4.jpg",
            "name": "Laura",
            "lastName": "Rodriguez",
            "description": "¡Hola! Soy una tutora dedicada y experimentada en programación aquí para ayudarte a dominar el arte de la codificación. Poseo un profundo conocimiento de diversos lenguajes de programación y paradigmas. Mi objetivo es empoderar a estudiantes como tú con el conocimiento y las habilidades necesarias para destacar en el mundo de la programación.",
            "email": "laura.rodriguez@example.com",
            "phone": "111-222-3333",
            "courses": [
              {
                "title": "Física",
                "price_hour": "2200",
                "info_course": [true, true, true, false],
                "course_description":"Este emocionante curso de matemáticas te sumergirá en el mundo de los números, las ecuaciones y la resolución de problemas. Desde álgebra hasta cálculo, explorarás conceptos matemáticos fundamentales y técnicas avanzadas. Aprenderás a abordar desafiantes problemas matemáticos con confianza y a aplicar estas habilidades en la vida cotidiana y en la toma de decisiones.",
                "frequency": [1, "semana"],
                "reviews": [{
                    "comment": "Que buena clase!",
                    "user_name": "Miryam",
                    "date": "2023-06-15",
                    "rating": 5
                  }]
              }
            ]
          },
          {
            "id": 4,
            "image_profile": "images/tutor5.jpg",
            "name": "Pedro",
            "lastName": "Martinez",
            "description": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur odio odit id repellendus corporis magni officiis corrupti culpa dicta totam dolorem, nihil, ratione reprehenderit consequatur, voluptas quia officia! Reiciendis tempore nostrum ipsum ab, corporis voluptatum velit eius incidunt labore quisquam hic possimus atque id veniam nisi sequi, corrupti molestiae eos soluta suscipit architecto! Placeat alias animi consequuntur soluta nemo. Accusantium, vero. Quos non nulla aperiam consectetur laboriosam eligendi, explicabo dolore quibusdam.",
            "email": "pedro.martinez@example.com",
            "phone": "999-888-7777",
            "courses": [
              {
                "title": "Inglés",
                "price_hour": "4000",
                "info_course": [true, false, false, true],
                "course_description":"Este emocionante curso de matemáticas te sumergirá en el mundo de los números, las ecuaciones y la resolución de problemas. Desde álgebra hasta cálculo, explorarás conceptos matemáticos fundamentales y técnicas avanzadas. Aprenderás a abordar desafiantes problemas matemáticos con confianza y a aplicar estas habilidades en la vida cotidiana y en la toma de decisiones.", 
                "frequency": [2, "semana"],
                "reviews": [
                  {
                    "comment": "Muy buen profesor",
                    "user_name": "Juan",
                    "date": "2020-10-10",
                    "rating": 4
                  }
                ]
              },
              {
                "title": "Portugués",
                "price_hour": "3500",
                "info_course": [false, true, true, true],
                "course_description":"Este emocionante curso de matemáticas te sumergirá en el mundo de los números, las ecuaciones y la resolución de problemas. Desde álgebra hasta cálculo, explorarás conceptos matemáticos fundamentales y técnicas avanzadas. Aprenderás a abordar desafiantes problemas matemáticos con confianza y a aplicar estas habilidades en la vida cotidiana y en la toma de decisiones.",
                "frequency": [2, "mes"],
                "reviews": []
              }
    
            ]
          }
    
        ]
      
export default data;