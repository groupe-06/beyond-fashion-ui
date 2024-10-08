const CreatePost = () => {
  return (
    <div class="main-content right-chat-active">
      <div class="middle-sidebar-bottom">
        <div class="middle-sidebar-left">
          <div class="preloader-wrap p-3">
            <div class="box shimmer">
              <div class="lines">
                <div class="line s_shimmer"></div>
                <div class="line s_shimmer"></div>
                <div class="line s_shimmer"></div>
                <div class="line s_shimmer"></div>
              </div>
            </div>
            <div class="box shimmer mb-3">
              <div class="lines">
                <div class="line s_shimmer"></div>
                <div class="line s_shimmer"></div>
                <div class="line s_shimmer"></div>
                <div class="line s_shimmer"></div>
              </div>
            </div>
            <div class="box shimmer">
              <div class="lines">
                <div class="line s_shimmer"></div>
                <div class="line s_shimmer"></div>
                <div class="line s_shimmer"></div>
                <div class="line s_shimmer"></div>
              </div>
            </div>
          </div>
          <div class="row feed-body">
            <div class="col-xl-8 col-xxl-9 col-lg-8 postcreate">
              {/* Creer Post */}

                <div class="card-body p-0">
                  <a
                    href="#"
                    class=" font-xssss fw-600 text-grey-500 card-body p-0 d-flex align-items-center"
                  >
                    <i class="btn-round-sm font-xs text-primary feather-edit-3 me-2 bg-greylight"></i>
                    Create Post
                  </a>
                </div>
                <div class="card-body p-0 mt-3 position-relative">
                  <figure class="avatar position-absolute ms-2 mt-1 top-5">
                    <img
                      src="images/user-8.png"
                      alt="image"
                      class="shadow-sm rounded-circle w30"
                    />
                  </figure>
                  <textarea
                    name="message"
                    class="h100 bor-0 w-100 rounded-xxl p-2 ps-5 font-xssss text-grey-500 fw-500 border-light-md theme-dark-bg"
                    cols="30"
                    rows="10"
                    placeholder="What's on your mind?"
                  ></textarea>
                </div>
                <div class="card-body d-flex p-0 mt-0">
                  <a
                    href="#"
                    class="d-flex align-items-center font-xssss fw-600 ls-1 text-grey-700 text-dark pe-4"
                  >
                    <i class="fa-solid fa-file-import"></i>
                    <span class="d-none-xs">Tags</span>
                  </a>
                  <a
                    href="#"
                    class="d-flex align-items-center font-xssss fw-600 ls-1 text-grey-700 text-dark pe-4"
                  >
                    <i class="font-md text-success feather-image me-2"></i>
                    <span class="d-none-xs">Photo/Video</span>
                  </a>
                  <a
                    href="#"
                    class="ms-auto"
                    id="dropdownMenu4"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i class="fa-solid fa-paper-plane"></i>
                  </a>
                  <div
                    class="dropdown-menu dropdown-menu-start p-4 rounded-xxl border-0 shadow-lg"
                    aria-labelledby="dropdownMenu4"
                  >
                    <div class="card-body p-0 d-flex">
                      <i class="feather-bookmark text-grey-500 me-3 font-lg"></i>
                      <h4 class="fw-600 text-grey-900 font-xssss mt-0 me-4">
                        Save Link{" "}
                        <span class="d-block font-xsssss fw-500 mt-1 lh-3 text-grey-500">
                          Add this to your saved items
                        </span>
                      </h4>
                    </div>
                    <div class="card-body p-0 d-flex mt-2">
                      <i class="feather-alert-circle text-grey-500 me-3 font-lg"></i>
                      <h4 class="fw-600 text-grey-900 font-xssss mt-0 me-4">
                        Hide Post{" "}
                        <span class="d-block font-xsssss fw-500 mt-1 lh-3 text-grey-500">
                          Save to your saved items
                        </span>
                      </h4>
                    </div>
                    <div class="card-body p-0 d-flex mt-2">
                      <i class="feather-alert-octagon text-grey-500 me-3 font-lg"></i>
                      <h4 class="fw-600 text-grey-900 font-xssss mt-0 me-4">
                        Hide all from Group{" "}
                        <span class="d-block font-xsssss fw-500 mt-1 lh-3 text-grey-500">
                          Save to your saved items
                        </span>
                      </h4>
                    </div>
                    <div class="card-body p-0 d-flex mt-2">
                      <i class="feather-lock text-grey-500 me-3 font-lg"></i>
                      <h4 class="fw-600 mb-0 text-grey-900 font-xssss mt-0 me-4">
                        Unfollow Group{" "}
                        <span class="d-block font-xsssss fw-500 mt-1 lh-3 text-grey-500">
                          Save to your saved items
                        </span>
                      </h4>
                    </div>
                  </div>
                </div>

              {/* Creer Post */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
