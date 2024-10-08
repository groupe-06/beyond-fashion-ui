const ConfirmFriend = () => {

return(
    <div class="col-xl-2 col-xxl-3 col-lg-4 ps-lg-0">
        <div class="card w-100 shadow-xss rounded-xxl border-0 p-0 ">
        <div class="card-body d-flex align-items-center p-4 mb-0">
            <h4 class="fw-700 mb-0 font-xssss text-grey-900">Confirm Friend</h4>
            <a
            href="default-member.html"
            class="fw-600 ms-auto font-xssss text-primary"
            >
            See all
            </a>
        </div>
        <div class="card-body bg-transparent-card d-flex p-3 bg-greylight ms-3 me-3 rounded-3">
            <figure class="avatar me-2 mb-0">
            <img
                src="images/user-7.png"
                alt="image"
                class="shadow-sm rounded-circle w45"
            />
            </figure>
            <h4 class="fw-700 text-grey-900 font-xssss mt-2">
            Anthony Daugloi{" "}
            <span class="d-block font-xssss fw-500 mt-1 lh-3 text-grey-500">
                12 mutual friends
            </span>
            </h4>
            <a
            href="#"
            class="btn-round-sm bg-white text-grey-900 feather-chevron-right font-xss ms-auto mt-2"
            ></a>
        </div>
        <div
            class="card-body bg-transparent-card d-flex p-3 bg-greylight m-3 rounded-3"
            style={{ marginBottom: "0px!important" }}
        >
            <figure class="avatar me-2 mb-0">
            <img
                src="images/user-8.png"
                alt="image"
                class="shadow-sm rounded-circle w45"
            />
            </figure>
            <h4 class="fw-700 text-grey-900 font-xssss mt-2">
            {" "}
            David Agfree{" "}
            <span class="d-block font-xssss fw-500 mt-1 lh-3 text-grey-500">
                12 mutual friends
            </span>
            </h4>
            <a
            href="#"
            class="btn-round-sm bg-white text-grey-900 feather-plus font-xss ms-auto mt-2"
            ></a>
        </div>
        <div class="card-body bg-transparent-card d-flex p-3 bg-greylight m-3 rounded-3">
            <figure class="avatar me-2 mb-0">
            <img
                src="images/user-12.png"
                alt="image"
                class="shadow-sm rounded-circle w45"
            />
            </figure>
            <h4 class="fw-700 text-grey-900 font-xssss mt-2">
            Hugury Daugloi{" "}
            <span class="d-block font-xssss fw-500 mt-1 lh-3 text-grey-500">
                12 mutual friends
            </span>
            </h4>
            <a
            href="#"
            class="btn-round-sm bg-white text-grey-900 feather-plus font-xss ms-auto mt-2"
            ></a>
        </div>
        </div>
    </div>
    )
};


export default ConfirmFriend;