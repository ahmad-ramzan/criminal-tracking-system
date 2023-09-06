import React,{useState} from 'react'

const Lgcard = ({heading,image,content}) => {
    const [showContent, setShowContent] = useState(false);

    const toggleContent = () => {
      setShowContent(!showContent);
    };

  //const content = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic temporibus quae provident labore sed facere placeat sapiente debitis error at ipsum tempora, numquam adipisci, aliquam quibusdam assumenda expedita alias magni! Optio amet reiciendis mollitia itaque, deserunt rem illo similique necessitatibus nemo assumenda, laudantium consectetur a eveniet perferendis facere nesciunt ab. Animi corrupti magni eum, et, nam iste enim aut, officiis libero quae laudantium perferendis odio neque dignissimos quam autem sit voluptatem cum. Aperiam laborum consectetur tempore! Natus, tenetur? Architecto ullam rem perspiciatis aliquam eveniet odio eum debitis natus laudantium. Incidunt earum enim quos distinctio, deleniti repellendus. Atque quam expedita inventore.";
  const displayContent = showContent ? content : `${content.split(' ').slice(0, 50).join(' ')}...`;

  return (
    <>
<div class="container is-flex-tablet p-6">
  <div class="column">
    <h2 className="is-size-3 has-text-weight-bold">{heading}</h2>
    <p className='is-size-4'>{displayContent}</p>
    <button className="button" onClick={toggleContent}>{showContent ? 'Read Less' : 'Read More'}</button>
  </div>
  <div class="column">
  <figure class="image is-4by3 has-text-centered" id='lgcardimg'>
    <img src={image} alt="Image"/>
    </figure>
  </div>
</div>
    </>
  )
}

export default Lgcard
