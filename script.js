var imgs = [];
var gameImgs = [];
var selectedImgs = [];
var score = 0;
generateImgs();
generateTable();
updateScore();

setTimeout(HideImgs, 2000);

function HideImgs() {
	var imgsToHide = document.getElementsByClassName('scored');
	if (imgsToHide.length > 0) {
		var len = imgsToHide.length;
		for (var i = 0; i < len; i++) {
			imgsToHide[0].className = "hidden";
		}
	}
}

function updateScore() {
	document.getElementById('score')
	.innerHTML = score;
}

function generateImgs() {
	imgs = [
	'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhISEhIVFhUWExUVFRUVFRUVFRUWFRUWFhUVFxUYHSggGBolGxUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OFxAQFSsdFR0rLSsrKy0rLS0tLSsrLS0tKystLS0tNy0rLSs3LTc3LS03Ny0tNysrKysrKysrLSsrK//AABEIAOUA3AMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAADAAECBAUGB//EADgQAAEDAgQEAwUHBQADAAAAAAEAAhEDIQQSMUEFUWFxEyKBBjKRobEUI0JSwdHwM2Jy4fEHFYL/xAAZAQADAQEBAAAAAAAAAAAAAAAAAQIDBAX/xAAhEQEBAAICAwEBAQEBAAAAAAAAAQIRAyESMUETIlFhBP/aAAwDAQACEQMRAD8A9uTEKSYpaAZTtapwkAkDQpJJIBJinTFBwN6YJOTBKGkop0k06MknhNKVqoZQUi5QLws6cKE8Js45pZkjIBEamATqpCpyohO5DVX2IIELHVsjHE8iiNWN7WvPguaDc2CcF6chwmo+vVqPcbZoHYLpxhBGiy/ZjCeGwA6xdb648+63xmoouwgUPsg5rQLVDIp0fTogUiVEBM5eg5tJSpIYUgkWkkk0pSgaOouTyokopIFMEzyq1ar/AHA/JR5aXIsPqAbqDqwGuqzK1UTuDprbvCz69Z8wHTz5qMs2k43QOrDmgVMWwayudOfmZ+SkKgH4jMc7eqjzaTibZ4rR0v8AAolPiFI6Suefi7ahDqVyI0S/Q5w7dS2qx+jlJ1EjSFyjOIHTpr+yvYXiZFg6ehT/AElReKxusqEWNkdtRZ2H4i13vQCfgrkeq0mTO46HcVBQCk0p0k2rnfaCrmcGroajoaSuRr+eoT1haesE+6PhRAsrzHoDWRCOCuJ0bTzpi8KOZQLVNErpiowpJl6DmhoTpJ0gYhNClCSY2iQhVnQJRnFVqxnXRTlTxZ+Iqk9lRdiS12Ugcr8zorTGyZB/F9FkcSqZgT+c25iCsMm+MF4l5SHEwQLcvVZzsVnAqCJAhw5ovFsQRI1nKL7WuVnMrj8IH9w6LDLJ04YDU8W8Wm30UHYnaxG6qVBe3ukyEhuo8q18IP4t7RClSdePiqrB8ESL/qkcxEc/lcbdFOnUI29UFrbynlGzuMXWVyFq4PiTmWcZafiOywQYCJSf/OS0xzrHPildmyvIDm3CI2ouYwONLLi43C3KNZpaHN0PyW+OW3JljpY4lWimeywsHTvK08V5mwVXw9LKLrTPLrSMZqnISCRKiSuarOQpKCm0JU3SJk6S7nOQThMEggVJRlSUH6IIOq9UatSSReIRq7tO6qVTGZ39tlGTTGQCs8NaB3+dlj1h52NN/MI6Aaq5XdZpNoEnusetWIe0jqJ6lYZ108cBxb876nISG+h0VFqILZtZJKQHNc2TsxmogO1lNolT8Mpwy+intQQbqpBpvBgfVFLIKdov20Tg2h4ZTFul9EYtMkqBCC2i4pMN9FLJz2UI3CZjMeQSfktLh+K8M/2nUfqstpVpivGufPHbqCOxCHU0VThWJkZTt9OSu1WyD8l0y7jkymqq+GUxaU7ahGqc1VjQiigJ2uCTilVR0RTJFMu9ynCeEwTkpAlCpoVJRebICjinQI9PmqmKeBmk2F0TF1eyz+L1hk7x2lZWt8cVDEVC+k52hLst+SzcQ4eWNQB8Ffx/lFFjbmCY2BN8xWfVF7kTuubOuzix0H4ZUvDlSHYo7GwsmuwGMTtRS2Uzj0RobQcbiUs1+6jUN904g6H0QKINLobWXnZTTP076q9QtmAk3uEwpdOkckRsf7TO79kag2FAB06FGv6oRmf5dEY7dGk2LmBeQ9vw+K32mNdOa5hrv3XSUnSAeYC3465uSAuF47qDaaPCYBTfbOGbTQahurRFlUdqppx1BTJEpLtcx0klEpgi5BxFSBquI49xOo+vUYCQxhgEGFd4FiXmk4OdmaTDSTJHdc/7S3To/CzGZLWJrTm6QqlbEhzG8gdOyi8kPPeD8FQruhhbzJ+JWeWWm2OBqlfM8uvrHoP0VcGT8ZKHNt5RG2F9Fhbt0zqDMtMpZxzQjLiAi+G0WOo+qQSY8mB80djFUNdsgbbb/wDEVriL6jZOC1N1JRyIjHJA6lOQthFiT0emAQoFt7J6Gwn0idVAshW2sQ6jOkI0cqu2bojbJwy8J3BCSprf4c6aY6SFgkad1tcJd5Y/uWmLDlW1GmEctTNbCdYbDrGAqiJi6ig0KauNQvdzUhVdzQcx/KVLN0I9F0bYjtxDuikcSYNtlWzJqlTyvjXKY+CLboSduCkvNVxMDxCD3laHBa2SoRIDSR8brPawtbGty49SSo0cZSdUFNr/ADm+XoN5XFLq7enljvBv4tpEtbrMuO91l4wmR1+q2HgNIkycvz6rJ4jSvJtew7rTOdMuP2qkibqWUghp0Oh5IZqX90m3JFLvKfu3QdenUBYt6kX5ZE+bkeSReCJ56Ki7irM+SpLSBZxEAqrifaLDskB+ctGjduqZaaWW8vkgbNIBCVTHYdo/qPYdnOEgHsFg432xYzM51MgNyyZ/NpFrqT+L5w2aBbmaHtLxALToZ2Wkl1vTK637dIzECAcxI1GVshx77IlTFNFhvt+65ahjzmyOa9gN2lrpYegK0MLRaXEhxJ6lLa5i2qb+SIypcoVOjA0TugCd09jRxXRmMBgk/NYmLxLmukDZR4dxUFxFQ5Z90lsiepCCrZqmDqO6Zp3F1E1HuEgNqco1jtuIQ8DUBMMs2btdaD3T0nyW4WpwU2P+Szi2P5K1uD0/IOZcSrwm6y5b/LXfREWVRxRyS0XWXXqG91fJqdOfDvsqlyiQhUlJzoWLWKVKu/8AOfirNPEv/MVn02PHJGYXjYLpjCtJuMfGohEGLdlcIHun6Kix53aiB3ldY+65O+qMfbz/AIjiXNqBs2OnqVb4Xw3LXdVIFmDL3KhxDhRrhpY7K5pkk9NkfA4wueGEGWi52MLz7O3rW/zI6Og7OwE6F1/0WdxOpeNgNdz3V/Bv+7a3qSPQrO4gyXkHcg2W2Xpz4ewc8Ra8W6K02I1JJ9VTAuVcpkaAd1i2VcZh2u98NI5G6xGcOokwxradRpMNIAa9p+q6Cu0EafBUK+DDhcCduY6g6hHcVGRxLgbaoLKlNwmJIuLaWWlwcChSdTa3NmaGee+Vo0AHJLwKrbNe+Ors31RKOEqnV1uZWk5LrTO8WO9qDOEuzEte0MJDvDiAP8eS0sDRyy6AL2VvDZYgAExBcVCq8G3JTVyURtabQhVapiD3lKjqZ5JPbNoSVpzntDXrNiHNBfpuQFhYPHCm9jA2o+rUdkbNTKCZvY2AXVcQwwIBcAQbTuCNLrKxPCKNQjOwtLTmBFxP6LXj19Y5+WulnC8ZLZz0XNDahaSNnDWHDULewmKbUu02N78/3VTB1A2h9naxuV0lz3XcSdxOhWVw3BVaVWo6n5qUDXYi2qMtb6LGWzt2tE2Mnquh4ccoYeQXL8OLzEtidbzddfhqVvRa8Vc/N10q8Y4haGtJWQMRJvZdK6mN2hBqYNp/CnlhussctKNIiFUxNeHarVOEHJU6vBQTMqPBXmrNR2hCaEVq1ZCtCNSQWozFZOcbhzRrvH4XT80CqSSDlgExPZb/ABjDZgKg1bqOnNY1WtncAJIbuB5R1J5rkyx1du7j5N4tCi21IDUSs/iHvOjWdVqUT5nHQAAA8+yzMc3zO7pZ+jx9qbBaeqIwXCi90AJBZRstOba1uaC5g3Cn4sjRCdUVaOJtZAlRe0mRMAKtiuIBtvlusrFYyqRLrN5blBtfw6d5eZ6aID2gafVFo4QlreUAj1Q3YdzZ36JKTwog6KyGyQRzKFScb+iNTJ8s805KKz68iRHPsgYakfeafQ6jtzWhWeCXNcN7FNToQNR0NjbuqiIA59Q2ysJne3+kbDtdBDn3OwAhTfRE7qVCiNd1NNf4cPM1san+FdZREBczwClNaDoASumyLq4ZqPO/9F7SlKVHw0xYV0ac+05SlQyFNlKXRsRiM1CajNURQjQjMCE1GYE4QrT/ADmqnEmAU4a0NzOvCttVXixhjf8AK3dTn6XxqLZzWFg2D3Czcf7x67rTY8Ea9xzKzsayHC+09B0XNn6deHtXI+iFlnSUfLzCHQKxkbbDe8BV2se7Sw+qu1aY5IgBABECQR/xazDacuTSo3ARpc65ihPw4LiDe1+XotFjpiTIi5H4u3JINblcAIiwO6vwiP1rPq1KjWtFN0AaWv8A8R6eJLhDiJ3OibE2AEG2p6Kp4Dc3kfygC7iT0OyPGF51peLpIFkvFBkZdeSEMPUcC4EECxjmFIYd8QTFpJ5p6OZ/9D4nQzMMWfsqGAxBiHDQxHLqFoOolpE3VTG0IcHgbXU5RczXzUtop4cqmx8hWWGB6Slrs7l06L2YpeWpUOrjA7BbJVPg1LLQpjeJPqrkLrxmsXm8l3kZJJJWkkkkkBghFahBFaFmqitR2IDEdiohAq/GmxQBP5greHZmMbalWcfQFRhZ0t3GiWU3Dxuq5jCPv/LHZNiKQIuLyZ/RU6dYg5TYh0OHIq2awInrC5tfHX5fVR9GD9YQ2URz2mNrKyRAvrJPoqdcgNl0+U2A3S8B5ikhokntzVas8ENNyCCP99FNrM1Vsg3bYGIP/EWoIgEWF4V/Cl253iFXFU/Dy5fDJgvuCzuEfCUcQ6j40Zm5iPKZPda1RuYEEWOx5KlSwxYfI5zY9RbmFO5Wkl+K1SpUYQH06gnpKlSxIJtl+EFajPaKqD94xr4tY5T8FOpjMHVLHVKeSJmWn6tCqao/qe50q0cRlDg2wNyASnZj2yGkGOv7qWKwWCNRpZiMrQy7QTDj3O6zeOYenSoOfTxGd34GG8nYWTTdX46CiQ7qq3E6YkC/urK4JWrBlPxG5XG8AzZauOdNx2CPhT2q4dgVjLKVBkK5hKMvZ3nulJunldR0FJxaGxyCtU6sqolK6dOC+19JAo1tijpmSSSSAwGotMaAST0Wh9jpDRpPcq1haTRo2FMxPavh+H6Fx9B+qJiabGjRXVVxlE1AQDEadeirRbEwjAGzub3RJVXC4kkZXCHNsR05hGDlUTaxvaLgLMRFVrslZgOV2xn8LhuFzTMRUpuDcQzI/TMPcdyIOnou0rPk9vmgYmg2o0sqNDmkXB5dOSzuC5yX05xtSQ7nBA/0q9ZstEmSYtyVjFcAqUhOHJeyP6bj5x2P6LNqV/OLFrouxwvpyWWWNbY5SrLjlI5xE6wrLWaQLnraFVwsujSSLjryVnDl0kCDAu5x+SzvptJIVNgJiZ3PopMw5fYW3PZROUt0HmJyxYiNU7KhENizrOifmstNYqVMJYmJj5whs0AE9iJWgwFge0x09eqnRcLeWRPvch1VTH/D87GNisKXWgejQlQ4e2ZcB8Fv1XgOnKCLaCR6IGIIcfKIGoanYP038U4Eg8laqUAYt1RKWHO8wexHZLNcgR6aBORlaahQV/h9GNdtChUzIAtNh/1adKlDZGmi2wxYcmVOkUxSlbOYpVnD1eaqp2uhCmgkoU3yFNALEUNwJT4d1oQ85nVRLZEiQd+RQW1t52TAqmyq4eU6o1SsqTUMbhvEhzTle24d+hG6pUcebseMrxqOfULTmIOyzsfTFSxOnuu3aUBIOTtKzaWKLXeHV1/C7Z3+1da5OwG4livCpPqbiI7lYNHCU8bTLKtRza4vTqtEOB/WCt7imBNXD1Gj3oDm/wDyZhcxwfHBrw4gWN41GxT8ZYcumJRrVcLVdRxY+8E5Hj3XsP4wt3BOytI7OLtdfwjmei1/afgbMdRyzDx5qNQWcx2oHVp3C43guMfSf4GKGWqwwB+YgnzDm3qubPj06cOR0dO7o90N6b7oVSCSf4SrAfcuOhsOV95QTTtPJxHwWVwbTkQYTmAdv804kOkjy7j6JZ9Sdrx+yIGyDbW+qJie9kyodhvpoiUYBmJnQHZLIYA56dUVjbwReI79VUxRchBUDWOv6HbsqNMNa6RmaSZ1sT1CtVoynobLjva/2jNOkch+8JhrRBM7FVcUzJt4jiQNQUaTgaryAQNgdyuq4Vj6Jc/DNcS5kZjsTF4K4X2UwZwOGGMxXmxVeTTbyLhqVtezWELatN8y95Ln73Nyt8MNRhnnt1FelCCtF15VGq2CioQSSSSMXDvgq2s9XKb7ICbmqFIkSDzUqbpHZM8DXmnCqT6eZuozXuqDQ5mt5VrD1BJG8p8RRzNJ3CKRxU8qrIFKrty+qOeaQBxGGbUblcOx3aeizGYg0HBtb3D7lTY9CtiVYfg2Ppup1G5mnX15clcBqOIFr9o0XK+0/CzSd9opjyOP3rRfKfzdk2Kp4jh5zAOxGE3IE1KXcfiC2MDxinWp5qbg9jgQ4fUEbFUFXhfEyWtYRtY8xsocd4M3FMBPkrM/p1B73+JPJZvEsKcJFZjC+hNwLupc7btXRcH4jSrsbUpPDhI01HcJZdjG6rjuC42oM1N8mHRlOsjYLZZWYTmdaRptK5zieINLF12VAW+fMwmwLXDnsVq4JzXNjMCGkkDc9Fz2adGPbV8IECLTsiCjZwAEGI59SqLd7kdR9CiUa7w3zSZOWw05FLpV20KjY0iwEdeyrYqsGiRrpJvqq+IxLWe9Ui8Rv8OS57ifHzdtJlRzhYhrCRPeFWk6Q9qeMZaZAcQYMt5xuDsgex/s2wD/ANjizmphuem0/m1iDqVLh/ss6oRieIuFOkLilPnfyB3HZExFDEYzEUw37rD0iPDp390aEjnHNaY4/wCs8svkbHh/aXiviJEWp0xo1mwPVdbwLhuTM+IkDIOQVHh3DWsubnYbdz1W4ypN1pWYlt7FCxFCRIUg/NY67FI8lmqKBCZGcdiFE0+SAGptqRZRIhMkFyk6HEKZSSVBXq2dZWcOZnukkgqyMaIqCN1bboCkkkR6YvCuNdf0TJJhJr7kbLleNcEp0y7E0funT5mt9x/dqSSoDcJxpqNBI1BBGxAXN8Z4U3D131MO51J2vlsDPNqSSCrU4Zi24yG4ik1zojNMfIgq1iP/AB9Qc8PZUqUiDPkOveZSSRYqWq59kXtJH22sQSSZazczGiNU9mqhc0fbKuW8jK3zADQlJJT4xXlVjDcIpMGYtzOA1dcH0RuJ4s0WSwNEjZoH6JJLSRFtcxhaRq/fVXF7nGGg6N6gbldNgcM2n5G7wS4+8T3TpIpRdAU6boKSSk1km6MBIukkpsUoVrFRBSSQBg7mnyDkmSSKv//Z',
	'https://cdn.vox-cdn.com/thumbor/m8QXqDRdHkc6MJHpuUU0BaoOGao=/0x0:1205x798/1200x800/filters:focal(513x122:743x352)/cdn.vox-cdn.com/uploads/chorus_image/image/55474495/Screen_Shot_2017_06_27_at_1.05.21_PM.0.png',
	'https://fsmedia.imgix.net/52/a4/1b/c5/bb72/425d/90ea/66a1290244f3/391jpg.jpeg?auto=format%2Ccompress&h=1200&w=1200&crop=edges&fit=crop',
	'https://img-9gag-fun.9cache.com/photo/av84PXq_460swp.webp',
	'https://img-9gag-fun.9cache.com/photo/awAPxz1_460swp.webp',
	'https://img-9gag-fun.9cache.com/photo/an98N7L_460swp.webp',
	'https://img-9gag-fun.9cache.com/photo/aqKB2LP_460swp.webp',
	'https://img-9gag-fun.9cache.com/photo/aLgVP7M_460swp.webp'
	];
	
	imgs = shuffle(imgs);
	
	for (var i = 0; i < 8; i++){
	gameImgs.push(imgs[i]);
	gameImgs.push(imgs[i]);
	}
	
	gameImgs = shuffle(gameImgs);
}

function generateTable() {
	var table = document
	.getElementById('game_table');
	var k = 0;
	
	for (var i = 0; i < 4; i++)
	{
		var row = table.insertRow(i);
		for (var j = 0; j < 4; j++)
		{
			var cell = row.insertCell(j);
			var img = document.createElement('img');
			img.id = i.toString() + j.toString();
			img.src = gameImgs[k];
			img.className = "scored";
			img.addEventListener('click',
			function (obj) {selectImg(obj.currentTarget)}, false);
			cell.appendChild(img);
			k++;
		}
	}
}

function selectImg(img) {
	if (img.className == "hidden") {
		img.className = "selected";
		selectedImgs.push(img);
		if (selectedImgs.length == 2) {
			if (areTheSame(selectedImgs[0],
			selectedImgs[1])) {
				setScored(selectedImgs[0],
			selectedImgs[1]);
			}
			else {
				selectedImgs[0].className = "hidden";
				selectedImgs[1].className = "hidden";
				selectedImgs = [];
			}
		}
	}
}

function setScored(img1, img2) {
	img1.className = "scored";
	img2.className = "scored";
	score++;
	updateScore();
	selectedImgs = [];
}

function areTheSame(img1, img2) {
	return img1.src == img2.src;
}

function shuffle(array) {
	return array.sort(() => Math.random() - 0.5);
}