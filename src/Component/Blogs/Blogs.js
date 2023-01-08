import React from 'react'

const Blogs = () => {
  return (
    <div className='container p-3'>
        <div>
        <h1 className='text-xl'>1. What is Context API?</h1>
        <p>Ans : One of the concepts of React is to break your application into components, for reusability purposes. So in a simple React application, we have a few different components. As our application grows, these components can become huge and unmaintainable, so we break them into smaller components.

            That’s one of the best concepts about React—you can create a bunch of components and have a fully maintainable and concise application, without having to create a super huge component to deal with your whole application.

            After breaking components into smaller components for maintainability purposes, these small components might now need some data to work properly. If these small components need data to work with, you will have to pass data through props from the parent component to the child component. This is where we can slow down our application and cause development issues.

            Let’s imagine that we have a component called Notes that is responsible to render a bunch of notes.

            const Notes.
             </p>
        </div>
        <div className='mt-5'>
            <h1 className='text-2xl'>2. What is Symentic Tag?</h1>
                <p>Ans : Semantic tags clearly define the purpose of the HTML element. It also describes the type of content that the element should contain.

                For example, header, footer, article are considered semantic elements as they clearly describe their purpose and the type of content they should enclose.

                New HTML5 semantic tags to structure the document in a meaningful way are:

                Semantic Tags - HTML

                *header
                *nav
                *article
                *section
                *aside
                *footer
                Semantic tags also help search engines to parse the webpage correctly and find accurate information. Thus, helping search engines to correctly index the page.
                </p>
        </div>
    </div>
  )
}

export default Blogs