<script>
let input=document.querySelector('#fname')
const target=document.querySelector('#pooria');
input.addEventListener('keyup',function(e){
    target.innerHTML = (e.target.value)* (10/100)*2;
})
</script>
