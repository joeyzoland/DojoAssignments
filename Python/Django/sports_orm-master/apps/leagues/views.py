from django.shortcuts import render, redirect
from .models import League, Team, Player

from . import team_maker
from django.db.models import Count

def index(request):

	# Team.objects.annotate(numberplayers = Count("all_players"))

	context = {
		#Sports Assignment 1
		# "leagues": League.objects.all(),
		# "teams": Team.objects.all(),
		# "players": Player.objects.all(),
		# "leagues":League.objects.filter(sport = "Baseball")	#...all baseball leagues
		#"leagues":League.objects.filter(name__contains = "Womens'")
		#"leagues":League.objects.filter(sport__contains = "hockey")
		#"leagues":League.objects.exclude(sport__contains = "football")
		#"leagues":League.objects.filter(name__contains = "conference")
		#"leagues" : League.objects.filter(name__contains = "atlantic")
		#"teams":Team.objects.filter(location = "Dallas")
		#"teams" : Team.objects.filter(team_name__contains = "raptor")
		#"teams" : Team.objects.filter(location__contains = "city")
		#"teams" : Team.objects.all().order_by('location')
		#"teams" : Team.objects.all().order_by('team_name').reverse()
		#"players":Player.objects.filter(last_name = "Cooper")
		#"players":Player.objects.filter(first_name = "Joshua")
		#"players":Player.objects.filter(last_name = "Cooper").exclude(first_name="Joshua")
		#players":Player.objects.filter(first_name = "Wyatt")|Player.objects.filter(first_name = "Alexander")



		#Sports Assignment 2
		# "teams": Team.objects.filter(league__name__contains = "Atlantic", league__sport__contains = "soccer")
		# "players": Player.objects.filter(curr_team__team_name__contains = "Boston Penguins")
		# "players": Player.objects.filter(curr_team__league__name__contains = "International Collegiate Baseball Conference")
		# "players": Player.objects.filter(curr_team__league__name__contains = "American Conference of Amateur Football", last_name = "Lopez")
		# "players": Player.objects.filter(all_teams__league__sport__contains = "football")
		# "teams": Team.objects.filter(curr_players__first_name__contains = "Sophia")
		# "leagues": League.objects.filter(teams__curr_players__first_name__contains = "Sophia")
		# "players": Player.objects.filter(last_name = "Flores").exclude(curr_team__team_name = "Washington Roughriders")

		# "teams": Team.objects.filter(all_players__first_name = "Samuel", all_players__last_name = "Evans")
		# "players": Player.objects.filter(all_teams__location = "Manitoba", all_teams__team_name = "Tiger-Cats")
		# "players": Player.objects.filter(all_teams__location = "Wichita", all_teams__team_name = "Vikings").exclude(curr_team__location = "Wichita", curr_team__team_name = "Vikings")
		# "teams": Team.objects.filter(all_players__first_name = "Jacob", all_players__last_name = "Gray").exclude(location = "Oregon", team_name = "Colts")
		# "players": Player.objects.filter(first_name = "Joshua", all_teams__league__name__contains = "Atlantic Federation of Amateur Baseball Players")

		# "teams": Team.objects.annotate(numberplayers = Count("all_players")).filter(numberplayers__gt = 11)
		# "players": Player.objects.annotate(numberteams = Count("all_teams")).order_by("all_teams")
	}
	return render(request, "leagues/index.html", context)

def make_data(request):
	team_maker.gen_leagues(10)
	team_maker.gen_teams(50)
	team_maker.gen_players(200)

	return redirect("index")
