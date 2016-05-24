<myform>
	<ul>
		<li each="{ todoList }">
			<div class="title">{ title }</div>
			<div class="description">{ description }</div>
		</li>
	</ul>

	<form id="todo-form">
		<p class="headline">Title</p>
		<input type="text" name="title" autocomplete="off" class="form-title"/>
		<input type="text" name="description" autocomplete="off" placeholder="Description"class="form-desc"/>
		<input type="submit" value="ToDo" class="form-submit"/>
	</form>

	<script>
		const self = this;
		self.todoList = [];

		self.on('mount', () => {
			document.getElementById('todo-form')
				.addEventListener('submit', onSubmit, false)
		})

		onSubmit = (e) =>
		{
			e.preventDefault();

			let children = e.target.children
			let title = children.title
			let description = children.description

			if (title.value === '' && description.value === '') return
			let todo = {
				title: title.value,
				description: description.value
			};

			self.todoList.push(todo)
			self.update(self.todoList)

			title.value = ''
			description.value = ''
		}
	</script>
</myform>



