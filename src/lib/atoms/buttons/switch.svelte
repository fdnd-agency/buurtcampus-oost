<script>
    export let id = "toggle";
</script>

<input type="checkbox" id={id} role="switch">
<span class="state">
    <span class="container">
      <span class="position"> </span>
    </span>
</span>


<style>

input {
  opacity: 0;
}

input ~ .state {
  display: inline-block;
  user-select: none;
}

input ~ .state > .container {
  position: relative;
  top: 2px;
  display: inline-block;
 	border: 2px solid #919191;
  background: #919191;
  width: 40px;
  height: 20px;
  border-radius: 11px;
  transition: 0.1s ease-in-out;
}

input ~ .state > .container > .position {
  position: absolute;
  top: 1px;
  left: 2px;
  display: inline-block;
  border-radius: 9px;
  width: 14px;
  height: 14px;
  background: #fff;
  transition: 0.1s ease-in-out;
}

input:checked ~ .state > .container > .position {
  left: 20px;
}

input:checked ~ .state > .container {
  border: 2px solid #005CDC;
  background: #005CDC;
}

input:hover ~ .state > .container {
  border: 2px solid #3D3D3D;
  background: #3D3D3D;
}

input:checked:hover ~ .state > .container {
  border: 2px solid #3D94FF;
  background: #3D94FF;
}

</style> 