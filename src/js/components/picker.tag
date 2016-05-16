<picker>
	<div class="picked-items">
	<span if={item.selected} each={item in items}>
	{item[mainLabel]}
		</span>
		<input onkeyup={filter} onfocus={openList} type="text">
	</div>
	<div if={isPicking} class="picker-list">
	<a onclick={closeList}>&times;</a>
	<table>
	<tr>
	<th each={label in labels}>{label}</th>
	</tr>
	<tr if={!item.filtered} class={selected: item.selected} onclick={pick} each={item in items}>
	<td each={label in labels}>
	{item[label]}
		</td>
	</tr>
	</table>
	</div>
	<script>
	this.mixin(arrayhelper)

	this.isPicking = false
	openList() {
		this.isPicking = true
	}

	closeList() {
		this.isPicking = false
	}

	pick(event) {
		event.item.item.selected = !event.item.item.selected
		this.trigger('picked', this.items.filter(function(item){return item.selected}))
	}

	filter(event) {
		this.filterByLabels(this.items, this.labels, event.target.value)
		this.trigger('filtered', this.items.filter(function(item){return !item.filtered}))
	}


	this.items = opts.items
	this.labels = opts.labels || Object.keys(this.items[0])
	this.mainLabel = opts.mainLabel || this.labels[0]
	</script>
</picker>