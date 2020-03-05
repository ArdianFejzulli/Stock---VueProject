<template>
<div class="container">

    <div class="row">
      <!-- Blog Entries Column -->
      <div class="col-md-8">

        <h1 class="my-4">Page Heading
          <small>Secondary Text</small>
        </h1>
        <hr />
        <!-- Blog Post -->
        <div class="card mb-4">
          <img class="card-img-top" src="http://placehold.it/750x300" alt="Card image cap">
          <div class="card-body">
            <h2 class="card-title">Post Title</h2>
            <p class="card-text">Text i shkurt</p>
            <a href="#" class="btn btn-primary">Read More &rarr;</a>
          </div>
        </div>
        <hr />  

        <!-- Blog Post -->
        <div class="card mb-4">
          <img class="card-img-top" src="http://placehold.it/750x300" alt="Card image cap">
          <div class="card-body">
            <h2 class="card-title">Post Title</h2>
            <p class="card-text">Text i shkurt</p>
            <a href="#" class="btn btn-primary">Read More &rarr;</a>
          </div>
        </div>
        <hr /> 

        <!-- Blog Post -->
        <div class="card mb-4">
          <img class="card-img-top" src="http://placehold.it/750x300" alt="Card image cap">
          <div class="card-body">
            <h2 class="card-title">Post Title</h2>
            <p class="card-text">Text i shkurt</p>
            <a href="#" class="btn btn-primary">Read More &rarr;</a>
          </div>
        </div>

        <!-- Pagination -->
        <ul class="pagination justify-content-center mb-4">
          <li class="page-item">
            <a class="page-link" href="#">&larr; Older</a>
          </li>
          <li class="page-item disabled">
            <a class="page-link" href="#">Newer &rarr;</a>
          </li>
        </ul>

      </div>

      <!-- Sidebar Widgets Column -->
      <div class="col-md-4">

        <!-- Search Widget -->
        <div class="card my-4">
          <h5 class="card-header">Search</h5>
          <div class="card-body">
            <div class="input-group">
              <input type="text" class="form-control" placeholder="Search for...">
              <span class="input-group-btn">
                <button class="btn btn-success" type="button">Search</button>
              </span>
            </div>
          </div>
        </div>

        <!-- Side Widget -->
        <div class="card-body">
            <h1> Trade or View your Portfolio</h1>
            <h6> You may Save & Load your Data</h6>
            <h6> Click on 'End Day' to begin a New Day!</h6>
            <hr>
            <p>Your Funds: {{ funds | currency }}</p>          </div>
        </div>

    </div>
    <!-- /.row -->

    <footer class="py-5 bg-dark">
        <div class="container">
            <p class="m-0 text-center text-black">Copyright &copy; Stock Trader 2020</p>
        </div>
    </footer>
</div>
<!-- /.container -->    
</template>

<script>
export default {
    computed: {
        funds() {
            return this.$store.getters.funds;
        }
    }
}
</script>