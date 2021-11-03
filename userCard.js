const template = document.createElement('template');

template.innerHTML = `
  <style>
			:host {
				display: flex;
				align-items: center;
				width: 450px;
				height: 180px;
				background-color: #d4d4d4;
				border: 1px solid #d5d5d5;
				box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.1);
				border-radius: 3px;
				overflow: hidden;
				padding: 10px;
				box-sizing: border-box;
				font-family: 'Poppins', sans-serif;
			}

			.image {
				flex: 0 0 auto;
				width: 160px;
				height: 160px;
				vertical-align: middle;
				border-radius: 5px;
			}

			.container {
				box-sizing: border-box;
				padding: 20px;
				height: 160px;
			}

			.container>.name {
				font-size: 20px;
				font-weight: 600;
				line-height: 1;
				margin: 0;
				margin-bottom: 5px;
			}

			.container>.email {
				font-size: 12px;
				opacity: 0.75;
				line-height: 1;
				margin: 0;
				margin-bottom: 15px;
			}

			.container>.button {
				padding: 10px 25px;
				font-size: 12px;
				border-radius: 5px;
				text-transform: uppercase;
			}

		</style>

		<img class="image">
		<div class="container">
			<p class="name"></p>
			<p class="email"></p>
			<button class="button">Follow John</button>
		</div>
`;

class UserCard extends HTMLElement {
	constructor() {
		super();

		var shadow = this.attachShadow( {
			mode: 'closed'
		} );

		// var templateElem = document.getElementById( 'userCardTemplate' );
		var content = template.content.cloneNode( true );
		content.querySelector( 'img' ).setAttribute( 'src', this.getAttribute( 'image' ) );
		content.querySelector( '.container>.name' ).innerText = this.getAttribute( 'name' );
		content.querySelector( '.container>.email' ).innerText = this.getAttribute( 'email' );
		// this.appendChild( content );

		shadow.appendChild( content );

		// var image = document.createElement('img');
		// image.src = 'https://semantic-ui.com/images/avatar2/large/kristy.png';
		// image.classList.add('image');

		// var container = document.createElement('div');
		// container.classList.add('container');

		// var name = document.createElement('p');
		// name.classList.add('name');
		// name.innerText = 'User Name';

		// var email = document.createElement('p');
		// email.classList.add('email');
		// email.innerText = 'yourmail@some-email.com';

		// var button = document.createElement('button');
		// button.classList.add('button');
		// button.innerText = 'Follow';

		// container.append(name, email, button);
		// this.append(image, container);


		// 监听事件
		this.$button = shadow.querySelector('button');
		this.$button.addEventListener('click', () => {
			// do something
			console.log('点击了按钮', this.getAttribute( 'name' ))
		});
	}
}
window.customElements.define( 'user-card', UserCard );



