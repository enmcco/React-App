import React from 'react';
import { Table, Card, CardBody, CardHeader } from 'reactstrap';

const Lists = (props) => {
  const clearButtonHandler = () => {
    props.setTable([]);
  };

  const addButtonHandler = (event) => {
    props.setTable((prevItems) => {
      prevItems.map((item) => {
        if (item.id === event.target.id) {
          item.quantity = item.quantity + 1;
        }
        return item;
      });
      return prevItems;
    });
  };

  const deleteButtonHandler = (event) => {
    props.setTable((prevItems) => {
      prevItems.map((item) => {
        if (item.id === event.target.id) {
          item.quantity = item.quantity - 1;
        }
        return item;
      });
      return prevItems;
    });
  };

  const tableItems = props.tableContents.map((item) => {
    return (
      <Card id={item.id} key={item.id}>
        <h1>{item.itemName}</h1>
        <h2>{item.quantity}</h2>
        <button onClick={addButtonHandler}>+</button>
        <button onClick={deleteButtonHandler}>-</button>
        <br />
      </Card>
    );
  });

  return (
    <div>
      <h2 className="App-header">Edit List</h2>
      <div className="d-flex justify-content-center">
        <Card className="w-50">
          <CardBody>
            {tableItems}
            <button onClick={clearButtonHandler}>
              Clear all items from inventory.
            </button>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export { Lists };
