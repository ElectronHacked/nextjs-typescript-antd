import React from 'react';
import uuid from 'uuid/v4';
import { createSelector } from 'reselect';
import { compose } from 'recompose';
import { connect } from 'react-redux';
import { IComment } from 'models';
import { selectSelectedPostComments } from 'redux-store/posts/selectors';
import './styles.scss';
import CommentItem from './../commentItem';

interface IProps {
  readonly comments: IComment[];
}

const CommentList: React.SFC<IProps> = ({ comments }) => {
  return (
    <React.Fragment>
      {comments.length > 0 && (
        <React.Fragment>
          <h3>Comments</h3>
          {comments.map(comment => (
            <CommentItem comment={comment} key={uuid()} />
          ))}
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

const mapStateToProps = createSelector(
  selectSelectedPostComments(),
  comments => ({ comments })
);

const withConnect = connect(mapStateToProps);

export default compose<IProps, IProps>(withConnect)(CommentList);
