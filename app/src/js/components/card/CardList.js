import React from 'react';
import Card from './Card';
import Spinner from '../common/spinner/Spinner';
import './CardList.scss';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

const CardList = ({cards, fetching, deleteCard, showModal, setActiveCard}) => {
  if (fetching) {
    return (
      <Spinner />
    );
  }

  return (
    <div style={{padding: '0 20px 20px 0', overflow: 'hidden'}}>
      <ReactCSSTransitionGroup
        transitionName='card-list-'
        transitionAppear={true} transitionAppearTimeout={0}
        transitionEnterTimeout={0}
        transitionLeaveTimeout={0}>
        {getCards(cards, deleteCard, showModal, setActiveCard)}
      </ReactCSSTransitionGroup>
    </div>
  );
};

export default CardList;

const getCards = (cards, deleteCard, showModal, setActiveCard) => {
  if (cards.length === 0) {
    return (
      <div>No data to show</div>
    );
  }

  return (
    <div className="row-fluid">
      {
        cards.map(card => {
          return (
            <Card
              key={card._id}
              card={card}
              deleteCard={deleteCard}
              showModal={showModal}
              setActiveCard={setActiveCard}
            />
          )
      })}
    </div>
  );
};
