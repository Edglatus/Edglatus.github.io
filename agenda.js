class Agenda
{
	constructor(cont = [])
	{
		this.contatos = cont;
	}

	addContato(contato)
	{
		this.contatos.push(contato);
	}
	removeContato(name)
	{
		this.contatos.pop();
	}
}

class Contato
{
	constructor(pessoa)
	{
		this.pessoa = pessoa;
	}
}

class Pessoa
{
	constructor(nome, tel = [], email = [], end = [])
	{
		this.nome = nome;
		this.list_telefone = tel;
		this.list_email = email;
		this.list_endereco = end;
	}

	addTelefone(telefone)
	{
		this.list_telefone.push(telefone);
	}

	addEmail(email)
	{
		this.list_email.push(email);
	}

	addEndereco(endereco)
	{
		this.list_endereco.push(endereco);
	}
}

class Telefone
{
	constructor(ddd, ddi, num)
	{
		this.ddd = ddd;
		this.ddi = ddi;
		this.numero = num;
	}
}

class Email
{
	constructor(endereco)
	{
		this.endereco = endereco;
	}
}

class Endereco
{
	constructor(rf, cidade, rua, num, bairro, cep, comp)
	{
		this.rf = rf;
		this.cidade = cidade;
		this.rua = rua;
		this.numero = num;
		this.bairro = bairro;
		this.cep = cep;
		this.complemento = comp;
	}
}
