import React from "react";

const InitialPage = ({getUsers}) => {


  return (
    <>
      <h2 className="text-success">User Information</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores,
        accusantium nemo eum fugit quibusdam nostrum vero doloremque? Tenetur et
        aut culpa sint! Perspiciatis fugit eius commodi necessitatibus eos et id
        in, ullam magni nemo. Officiis odio ab officia, eaque repudiandae sequi
        et impedit eos animi assumenda iusto nesciunt corporis sed, id laborum
        cum perspiciatis, culpa quisquam nemo similique est quibusdam iure
        laboriosam labore. Quidem eveniet maxime placeat consectetur libero
        dolore nemo iste, aspernatur, rem ut nihil reprehenderit ad, quos
        debitis cupiditate rerum suscipit ipsum necessitatibus ea velit
        obcaecati! Aliquid eos accusamus minima labore natus, consectetur fugit
        dolore tempora dignissimos eveniet voluptatibus enim assumenda?
        Nesciunt, natus tempore. Molestias voluptate reiciendis velit rem ipsam
        saepe culpa, cum porro laboriosam, officiis aut harum hic officia
        possimus esse odit natus eveniet nemo nisi quam consequuntur blanditiis
        architecto nostrum. Sint, ducimus? Possimus odit quo incidunt molestiae
        eveniet. Possimus, doloremque. Nam mollitia quisquam inventore,
        accusamus excepturi voluptatem, cumque explicabo omnis quam ipsam odio
        libero aliquam ipsa molestiae minus sapiente! Quia repellendus nobis
        dolore non quos praesentium, consequuntur mollitia labore nisi libero
        earum ipsum beatae illum assumenda et laboriosam odio, tenetur esse
        officia ipsam, saepe harum. Quis sit illo rerum libero magnam placeat,
        perferendis nobis velit vero?
      </p>
      <button onClick={() => {getUsers()}} className="btn btn-success">Get Users</button>     
    </>
  );
};

export default InitialPage;
