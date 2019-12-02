import React from "react";

const EditPost = props => {
  return (
    <div className="container mt-5">
      <form>
        <div className="row form-group">
          <label className="col-sm-2 col-form-label">Title</label>
          <div className="col-sm-6">
            <input type="text" className="form-control" name="title" value="{title}" />
          </div>
        </div>
        <div className="form-group row">
          <label className="col-sm-2 col-form-label">Content</label>
          <div className="col-sm-6">
            <textarea name="body" cols="30" rows="10" className="form-control" value="{body}"></textarea>
          </div>
        </div>
        <div className="form-group row">
          <div className="col-sm-8">
            <button type="submit" className="btn btn-primary float-right" onClick={e => e.preventDefault()}>
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default EditPost;
