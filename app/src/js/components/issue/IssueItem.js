import React from 'react';
import { Link } from 'react-router';
import Button from '../common/Button';
import toastr from 'toastr';

const IssueItem = ({issue, deleteIssue}) => {
  return (
    <div key={issue._id} className="col-sm-6 col-md-3">
      <div className="thumbnail">
        <div className="caption">
          <h3><Link to={`/issues/${issue._id}`}>{issue.title}</Link></h3>
          <p>{issue.description} ({issue.comments.length})</p>
          <p>
            <Button
              text='remove'
              onClickHandler={() => {
                deleteIssue(issue._id)
                  .then(() => toastr.success('Issue removed successfully'))
              }}
              className='btn btn-danger btn-xs'
            />
            {' '}
            <Link to={`/issues-edit/${issue._id}`}>
              <Button
                text='edit'
                className='btn btn-success btn-xs'
              />
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default IssueItem;
