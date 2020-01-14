import React from 'react';
import { Card, Button, CardBody, CardTitle, CardText } from 'reactstrap';

const PostItem = () => {
  return (
    <Card>
      <CardBody>
        <div className='row'>
          <div className='col-3'>
            <img
              src='https://picsum.photos/500'
              className='img-fluid rounded'
              alt=''
            />
          </div>

          <div className='col-9'>
            <CardTitle>Titre</CardTitle>

            <CardText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </CardText>

            <Button color='primary'>Go somewhere</Button>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

export default PostItem;
